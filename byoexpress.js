// Load .env for development environments
require('dotenv')().load();

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    keystone = require('keystone'),
    simpledocs = require('simpledocs');
    
   // Mongoose connection to MongoDB 
mongoose.connect('mongodb://localhost/snowcoins', function (error) {
    if (error) {
        console.log(error);
    }
});
 
var init = {
	standalone: false,
	app:app,
	mongoose:mongoose,
	route: '/docs/simpledocs',
	'new user can admin':true,
	'allow register':true,
	'ssl': false,
	//'ssl key': 'key.pem',
	//'ssl cert':'cert.pem',
	//'ssl port': 12222,
	'name': 'standalone documents',
	'brand': 'inquisive',
	'mongo': 'mongodb://jackson-pollup.snowcoins.link/snowcoinslink',
	'simpledocs model': 'simpledocs-documentation',
	'simpledocs model config': {
		label: 'SimpleDocs Documentation',
		path: 'simpledocs',
		singular: 'SimpleDocs Document',
		plural: 'SimpleDocs Documents',
	},
}
	
simpledocs
	.on('init',function(config) {
		/* we get the config object we pass to start */
		
	})
	.on('keystone',function(keystone) {
		/* add your own keystone options before mount */
		
	})
	.on('model',function() {
		/* add your own models and register them with keystone */
		
	})
	.on('routes',function() {
		/* add your own routes */
		
	})
	.on('complete',function() {
		/* app is configured */
		
		/*start app */
		console.log('start app on port 12555');
		app.listen(12111);
	})		
	.start(init);
 


/**
 * 2014 snowkeeper
 * github.com/snowkeeper
 * npmjs.org/snowkeeper
 * 
 * Peace :0)
 * 
 * */
