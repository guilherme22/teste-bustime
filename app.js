var express = require('express'),
    modelPessoa = require('./modulos/pessoaModel')();
var app = express();

var Twit = require('twit')

var T = new Twit({
    consumer_key:         'mYOkydmfsHfeuCOYntPFcCcFn'
  , consumer_secret:      'TbnykO78w6vUPt0xLBcF51206KIUmccjMksvqNu8DkKDSfl2CX'
  , access_token:         '193105220-4xYGJBNUzsNsp0Zag4fNo1CAlY1Nrr8XGa5XZ3UN'
  , access_token_secret:  'MZkjJRAtnxG5ARLNdwR4ZQLNGpITLpiJnm2XLOzE2f8ox'
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