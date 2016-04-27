var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.get('/', function (req, res){
	res.send('555');
});

server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000, function (){
	console.log('ok');
});