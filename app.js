var express = require('express'),
    modelPessoa = require('./modulos/pessoaModel')();
var app = express();

var Twit = require('twit')

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

app.get('/', function(req, res){
  res.sendfile(__dirname+'/index.html');
});

app.get('/teste', function(req, res){
	res.send(modelPessoa.buscarPessoa());
})

app.get('/twitter', function(req, res){
	console.log(Twit);
	T.get('search/tweets', { q: 'banana since:2014-01-01', count: 10 }, function(err, data, response) {
  			res.send(data);
		})
})

app.listen(3000);