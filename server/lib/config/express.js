'use strict';

var express = require('express'),
  path = require('path');

module.exports = function (app, config) {

  // all environments
  app.set('port', process.env.PORT || 3000);

  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);

  // development only
  if ('development' === app.get('env')) {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.use(express.errorHandler());
  }
  // production only
  else {
    app.use(express.favicon(path.join(config.root, 'public/favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
  }


}



