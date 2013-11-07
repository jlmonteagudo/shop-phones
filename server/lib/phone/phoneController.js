'use strict';

var dbManager = require('../db/db');


exports.list = function(req, res) {
	var	collection = dbManager.db().collection('phones');
	collection.find().toArray(function(err, phones) {
  		res.json(phones);
	});
}


exports.listPaginaged = function(req, res) {
	var cursor = dbManager.db().collection('phones').find();
	cursor.limit(3).skip(5).toArray(function(err, phones) {
  		res.json(phones);
	});
}
