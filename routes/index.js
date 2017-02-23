var data = require('../data.json');
var _ = require("underscore");
/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', {
  		"current_icon": "home",
  		"data": data,
  		"counts": _.countBy(data['notifications'], function(item){ return item.module;}),
  		"tabs": []
  	});
};

exports.schedule = function(req, res){
  	res.render('scheduler', {
  		"current_icon": "calendar",
      "data": data,
  		"tabs": [
			{
				"page": "#calendar",
				"name": "Calendar"
			},
			{
				"page": "#resources",
				"name": "Resources"
			},
			{
				"page": "#administration",
				"name": "Administration"
			},
		]
  	});
};

exports.schedule = function(req, res){
  	res.render('scheduler', {
  		"current_icon": "calendar",
      "data": data,
  		"tabs": [
			{
				"page": "#calendar",
				"name": "Calendar"
			},
			{
				"page": "#resources",
				"name": "Resources"
			},
			{
				"page": "#administration",
				"name": "Administration"
			},
		]
  	});
};

exports.assets = function(req, res){
  	res.render('assets', {
  		"current_icon": "list-alt",
      "data": data,
  		"tabs": []
  	});
};

exports.attendance = function(req, res){
  	res.render('attendance', {
  		"current_icon": "time",
      "data": data,
  		"tabs": []
  	});
};

exports.accounting = function(req, res){
  	res.render('accounting', {
  		"current_icon": 'usd',
      "data": data,
  		"tabs": []
  	});
};

exports.calculator = function(req, res){
  	res.render('calculator', {
  		"current_icon": 'plus-sign',
      "data": data,
  		"tabs": []
  	});
};


exports.cashflow = function(req, res){
  	res.render('cashflow', {
  		"current_icon": "signal",
      "data": data,
  		"tabs": []
  	});
};


exports.inventory = function(req, res){
  	res.render('inventory', {
  		"current_icon": "inbox",
      "data": data,
  		"tabs": []
  	});
};


exports.payroll = function(req, res){
  	res.render('payroll', {
  		"current_icon": "credit-card",
      "data": data,
  		"tabs": []
  	});
};
