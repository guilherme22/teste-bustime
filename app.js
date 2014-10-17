var express = require('express'),
    modelPessoa = require('./modulos/pessoaModel')();
var app = express();

app.get('/', function(req, res){
  res.sendfile(__dirname+'/index.html');
});

app.get('/teste', function(req, res){
	res.send(modelPessoa.buscarPessoa());
})

app.listen(3000);