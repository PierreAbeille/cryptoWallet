let express = require ('express')
let app = express()
let port = 3000
app.use(express.json())
app.use(express.static(__dirname + '../crypto-wallet-app/public'))
const CoinGecko = require('coingecko-api')
const CoinGeckoClient = new CoinGecko()
const cors = require('cors')
app.use(cors())
let http = require('http').Server(app)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
var jsonParser = bodyParser.json()

let mysql = require('mysql')
let con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'wallet'
})

app.get('/home', function (req, res){
	res.json({
		message:'Bonjour'
	})
})

app.get('/allwallets', function(req, res){
	con.query("SELECT actif, SUM(nombre_actifs) as total FROM wallets GROUP BY actif;",function(err, result){
		if (err) throw err;
		console.log(result[0])
		res.json(result)
	})
})

const getCoinByID = async(id) => {
	try{
  		let data = await CoinGeckoClient.coins.markets()
  		return data.data[id].symbol
  		// data.data[i] permet de récupérer seulement un objet
  		// On peut récupérer une valeur, qu'elle soit id, name, current_price, etc
	}catch(error){
		console.log(error)
	}	
}

const getCoinByName = async(name) => {
	try{
  		let data = await CoinGeckoClient.coins.markets()
  		for(let i=0 ; i<data.data.length ; i++){
  			if(data.data[i].symbol === name) return data.data[i]
  		}
	}catch(error){
		console.log(error)
	}	
}

const getHistoricByName = async(name, date1, to) => {
	let coin = await getCoinByName(name)
	let data = await CoinGeckoClient.coins.fetchMarketChartRange(coin.id, {
		vs_currency: 'eur',
		from: date1,
		to: to
	})
	return data
}

const getAllHistoricByName = async(name) => {

	let coin = await getCoinByName(name)
	let data = await CoinGeckoClient.coins.fetchMarketChart(coin.id, {
		vs_currency: 'eur',
		//Ici pour l'exercice, je récupère les données de la dernière année mais en réalité je peux mettre autant de jours que je veux
		days: '365'
	})
	return data
}

app.get('/coins/:id', async function(req, res){
	try{
		const result = await getCoinByID(req.params.id)
		res.json(result)
	}catch(error){
		console.log(error)
	}
})

app.post('/withdraw', jsonParser, function(req, res){
	con.query("insert into wallets values('"+req.body.asset+"','-"+req.body.value+"',NOW());",function(err, result){
		if (err) throw err;
		res.json(result)		
	})
})

app.post('/deposit', function(req, res){
	con.query("insert into wallets values('"+req.body.asset+"','"+req.body.value+"',NOW());",function(err, result){
		if (err) throw err;
		res.json(result)		
	})
})

app.delete('/deletewallet', function(req, res){
	con.query("DELETE FROM wallets WHERE actif = '"+req.body.asset+"';",function(err, result){
		if (err) throw err;
		res.json(result)		
	})
})

app.get('/graphique/:asset', async function(req,res){
		con.query("SELECT actif, SUM(nombre_actifs) as Total, date FROM wallets WHERE actif='"+req.params.asset+"' AND (`date`) BETWEEN DATE('2000-01-01') AND DATE(NOW()) GROUP BY date",async function(err, result){
			
			try{
				if (err) throw err;
				let length = result.length-1

				//Permet de passer les données en JSON, sinon express ne les reconnait pas
				for(let i=0; i<result.length; i++){
					result[i].date = result[i].date.toJSON()
				}

				//Récupérer la monnaie et son historique
				let data = await getAllHistoricByName(req.params.asset)

				/*Toute cette fonction permet de vérifier que le jour passé dans la requête SQL correspond
				bien à au moins un jour corresponant à l'historique
				En gros si ma requête SQL est au 01/01/2020 et que la fonction retourne une date au 01//01/20,
				elle va ajouter le prix de la monnaie au jour J dans un tableau
				*/
				let datechanger = new Date(data.data.prices[0][0]).toJSON().substring(0,10)
				let dateboucle = result[0]
				let stockasset = []
				let stock = 0
				let tabprix = []
				for(let i=0; i< result.length; i++){
					dateboucle = result[i].date.substring(0,10)
					for(let j=0; j < data.data.prices.length ; j++){
						datechanger = new Date(data.data.prices[j][0]).toJSON().substring(0,10)
						if (datechanger === dateboucle) {
							stock+= result[i].Total
							stockasset.push(stock) // Permet d'ajouter les assets entre eux
							tabprix.push(data.data.prices[j][1])
						}
					}
				}


				let prixcomplet = []
				let varloop = 0

				//Les dates permettent de loop au sein d'une date
				let date1 = new Date(result[0].date)
				let date2 = new Date()
				let tabajouter = {}

				//Tab X-Y -> Tableau créé spécialement pour l'API de graphique qui marche avec des axes X et Y (normal quoi)
				let tabxy = []
				
				//Ce for avec les 2 dates au dessus boucle du jour de la première requête SQL jusqu'à aujourd'hui, y compris les
				//jours non compris dans la requête SQL
				for(date1 ; date1 <= date2 ; date1.setDate(date1.getDate() +1)){		
					//Comme on loop dans une date, on n'a pas accès à un valeur[i], j'ai donc ajouté une variable,
					//"varloop" qui permet de boucler comme dans une boucle
					//Mais comme ma requête SQL peut être plus courte que le nombre de jours passés, le varloop s'avère utile
					//Pour ajouter à chaque fois la dernière somme utilisée si jamais on n'a pas de jour correspondant en SQL
					for(let i=0 ; i < data.data.prices.length; i++){
						let date = new Date(data.data.prices[i][0]).toJSON().substring(0,10)
						if (date === date1.toJSON().substring(0,10)){
							//Permet d'ajouter tous les prix du jour 1 au jour J dans un tableau en faisant une double boucle
							//Dans la requête de l'API et dans la boucle (date1 - date3)
							prixcomplet.push(data.data.prices[i][1])
						}
					}
					if (varloop<result.length) { //Permet de vérifier qu'on est dans la requête
						if (date1.toJSON() == result[varloop].date) {
							tabajouter = {x: new Date(date1), y:stockasset[varloop]}
							tabxy.push(tabajouter)
							varloop+=1
						}
						else {
							varloop-=1
							tabajouter = {x: new Date(date1), y:stockasset[varloop]}
							tabxy.push(tabajouter)
							varloop+=1
						}
					}else{  //Ajoute le dernier prix connu pour avoir un graphique complet
						tabajouter = {x: new Date(date1), y:stockasset[varloop-1]}
						tabxy.push(tabajouter)
					}
					
				}
				//Et ça c'est pour multiplier le nombre d'actifs que j'ai par son prix au jour J
				for (let i = 0; i<tabxy.length ; i++) {
					tabxy[i].y *=prixcomplet[i]
				}	
				res.json(tabxy)
			}catch(error){
				console.log(error)
			}
		})			
})

http.listen(port, function(){
	console.log('listening on port 3000')
})