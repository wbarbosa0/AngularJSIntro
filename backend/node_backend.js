var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var contatos = [
	{nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", csp: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", csp: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", csp: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", csp: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", csp: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", csp: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", csp: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", csp: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 24375);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  console.log(contatos);
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  console.log(req.body);
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});