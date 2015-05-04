'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var JSONStream = require('JSONStream');
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Routes
app.get('/', function(req, res) {
	
	var JSONobj;
	
	fs.readFile('json/sample.json', 'utf8', function (err, data) {
	  
	  if (err) throw err;
	  
	  JSONobj = JSON.parse(data);
	  
	  res.render('./index.html', {
		items : JSONobj
	  });
	});	

});

// Static assets
app.use(express.static('public'));

// Ports
app.listen(3000);

console.log('Listening on port 3000');