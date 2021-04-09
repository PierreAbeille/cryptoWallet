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
	console.log('bonjour')
	res.json({
		message:'Bonjour'
	})
})

app.get('/allwallets', function(req, res){
	con.query("SELECT actif, SUM(nombre_actifs) as total FROM wallets GROUP BY actif;",function(err, result){
		if (err) throw err;
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

	let data = await getCoinByName(req.params.asset)
	// Pour avoir le prix => data.current_price

	if(req.params.asset === 'all'){
		con.query("SELECT actif, SUM(nombre_actifs) as total, date FROM wallets WHERE (`date`) BETWEEN DATE('2000-01-01') AND DATE(NOW()) GROUP BY date, actif",function(err, result){
			if (err) throw err;
			res.json(result)		
		})
	}else{
		con.query("SELECT actif, SUM(nombre_actifs) as Total, date FROM wallets WHERE actif='"+req.params.asset+"' AND (`date`) BETWEEN DATE('2000-01-01') AND DATE(NOW()) GROUP BY date",function(err, result){
			if (err) throw err;
			res.json(result)	
			// res.json(result + data)				
		})
	}
	
})


http.listen(port, function(){
	console.log('listening on port 3000')
})