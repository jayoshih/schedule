
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var Handlebars = require('handlebars');
var _ = require('underscore');

var index = require('./routes/index');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
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

// Add routes here
app.get('/', index.view);
app.get('/schedule', index.schedule);
app.get('/accounting', index.accounting);
app.get('/assets', index.assets);
app.get('/attendance', index.attendance);
app.get('/calculator', index.calculator);
app.get('/cashflow', index.cashflow);
app.get('/inventory', index.inventory);
app.get('/payroll', index.payroll);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});