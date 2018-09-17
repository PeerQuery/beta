
'use strict';

var router = require('../../server/router'),
	address = require('../indexes/address'),
	cookie = require('cookie-parser');
	
module.exports = function(app) {
	
	app.get('/login', function (req, res) {
		
		if(req.active_user) return res.redirect('/@' + req.active_user.account);
        return router(address.client.login, req, res);
		
	})
	
	app.get('/create/report', function (req, res) {
        return router(address.client.new_report, req, res);
	})
	
	app.get('/create/query', function (req, res) {
        return router(address.client.new_query, req, res);
	})
	
	app.get('/create/project', function (req, res) {
        return router(address.client.new_project, req, res);
	})
	
	app.get('/logout', function (req, res) {
		res.clearCookie('_auth').redirect("/");
	})

}