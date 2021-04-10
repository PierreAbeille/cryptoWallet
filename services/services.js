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

app.post('/test', jsonParser, function(req, res){
	console.log(req.body);
	res.json({status:'ok'})
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

	if(req.params.asset === 'all'){
		con.query("SELECT actif, SUM(nombre_actifs) as total, date FROM wallets WHERE (`date`) BETWEEN DATE('2000-01-01') AND DATE(NOW()) GROUP BY date, actif",function(err, result){
			if (err) throw err;
			for(let i=0; i<result.length; i++){
				result[i].date = result[i].date.toJSON()
			}
			console.log(result)
			
			res.json(result)		
		})
	}else{
		con.query("SELECT actif, SUM(nombre_actifs) as Total, date FROM wallets WHERE actif='"+req.params.asset+"' AND (`date`) BETWEEN DATE('2000-01-01') AND DATE(NOW()) GROUP BY date",async function(err, result){
			if (err) throw err;
			let length = result.length-1

			//Permet de passer les données en JSON, sinon express ne les reconnait pas
			for(let i=0; i<result.length; i++){
				result[i].date = result[i].date.toJSON()
			}
		
			let data = await getAllHistoricByName(req.params.asset)
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
			let stockfinal = []
			let varloop = 0
			//Les dates permettent de loop au sein d'une date
			let date1 = new Date(result[0].date)
			let date2 = new Date(result[length].date)
			for(date1 ; date1 <= date2 ; date1.setDate(date1.getDate() +1)){
				for(let i=0 ; i < data.data.prices.length; i++){
					let date = new Date(data.data.prices[i][0]).toJSON().substring(0,10)
					if (date === date1.toJSON().substring(0,10)){
						prixcomplet.push(data.data.prices[i][1])

					}
				}
				if (date1.toJSON() == result[varloop].date) {
					stockfinal.push(stockasset[varloop])
					varloop+=1
				}
				else {
					varloop-=1
					stockfinal.push(stockasset[varloop])
					varloop+=1
				}
			}
			let resultfinal =[]
			for(let i=0 ; i<stockfinal.length; i++){
				resultfinal.push(stockfinal[i]*prixcomplet[i])
			}
			result.push(resultfinal)
			res.json(result)

		})
	}
	
})

http.listen(port, function(){
	console.log('listening on port 3000')
})