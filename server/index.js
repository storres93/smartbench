'use strict';

var express = require('express'),
	path = require('path'),
	console = require('console');

var app = module.exports = express();

app.use('/', express.static(path.join(__dirname, './')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.set('port', (process.env.PORT || 8080));

if (module.parent === null) {
	app.listen(app.get('port'), function() {
		console.log('Server listening on port ', app.get('port'));
		console.log('SmartBench available at http://localhost:%s', app.get('port'));
	});
}
