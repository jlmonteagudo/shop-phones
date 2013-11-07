
var MongoClient = require('mongodb').MongoClient,
  config = require('../config/config'),
  db;


exports.init = function(config) {
  MongoClient.connect(config.db, function(err, internalDb) {
  	
  	if (err) {
  	  console.log('Error connecting to the Database: ' + err);
  	  return;
  	}

  	db = internalDb;
  	console.log('Database connected: ' + config.db);

  });
}


exports.db = function() {
	return db;
}

