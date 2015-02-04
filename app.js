var express = require('express'); 
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);


http.listen(4000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

/*io.sockets.on('conncetion',function(socket){
	
			console.log('user connected');
		socket.on('recv',function(data){
	
	});
		});


*/
io.sockets.on('connection',function(socket){
			console.log("test");
			
						socket.broadcast.emit("1-2-3");
			socket.on('message',function(msg){

						//console.log(msg);
						var data = msg;
						socket.broadcast.emit('message',data);
						console.log(data);
					});


		});
