var PORT = 3000;
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var Handlebars = require('handlebars');
var _ = require('underscore');

var index = require('./routes/index');

// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/'));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Scheduler'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/', index.view);
app.get('/schedule', index.schedule);
app.get('/accounting', index.accounting);
app.get('/assets', index.assets);
app.get('/attendance', index.attendance);
app.get('/calculator', index.calculator);
app.get('/cashflow', index.cashflow);
app.get('/inventory', index.inventory);
app.get('/payroll', index.payroll);


// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});
