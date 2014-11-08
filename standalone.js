// Load .env for development environments
require('dotenv')().load();

/**
 * Application Initialisation
 */

var simpledocs = require('simpledocs');
	
var init = {
	standalone: true,
	theme:false,
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
		console.log('user on ran');
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
