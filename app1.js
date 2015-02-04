var express = require('express');
var app = express();
var http = require('http').Server(app);
var io =require('socket.io')(http);
app.get('/',function(req,res){
			res.sendFile(__dirname + '/views/index.html');
		
		});
io.on('conncetion',function(socket){
			console.log('user connected');
		});

http.listen(4000,function(){
			console.log('listening on *:4000');
		});
