var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.get('/', function (req, res){
	res.send('555');
});

server.listen(80, function (){
	console.log('ok');
});