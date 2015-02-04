var net = require('net');
var client = net.Socket();
client.connect(4001,'175.126.195.162',function(){
				console.log('Connected');
				client.write('Hello, server! from web page.');
		});

client.on('data',function(data){
			console.log('Recived: ' + data);
			//client.destroy(); //kill client after server's response
		});

client.on('close',function(){
		console.log('Connection closed');
		});
