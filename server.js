var ioSocket = require('socket.io-client')('http://hywonder.cafe24.com:4000');

var net = require('net');
var server = net.createServer();
var sockets=[];
var sendData;
server.on('connection',function(socket){
		console.log('New connection');
		console.log('Connected From: ' + socket.remoteAddress + ':' + socket.remotePort);

		sockets.push(socket);
		socket.setEncoding('utf8');
		ioSocket.connect();
	//	ioSocket.on('connect',function(client){

					socket.on('data',function(data){
						console.log('got data:',data);
						sendData = data;	
					ioSocket.emit('message',sendData);


						sockets.forEach(function(otherSocket){
									  if(otherSocket!==socket){
										otherSocket.write(data);
									  }
							//		socket.write('data');

							});
		});
	ioSocket.on('message',function(webData){
								console.log(webData);
								socket.write(webData);
							});
				
				
			});

	

	//	});

server.on('error',function(err){

		console.log('Server Error:',err.message);
		});

server.on('close',function(){
			console.log('Server closed');
			var index = sockets.indexOf(socket);
			sockets.splice(index,1);

		});

server.listen(4001);
