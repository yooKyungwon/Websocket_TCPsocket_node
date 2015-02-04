var io;
io = require('socket.io').listen(4001);
io.sockets.on('connection',function(socket){
				socket.on('recv',function(data){
				 	console.log("ads");
					console.log(data);
						socket.send(data);

					});

				socket.on('send',function(){
							socket.send(1234);
					});
		});
console.log('running on 4001port');
