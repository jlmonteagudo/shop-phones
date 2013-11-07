'use strict';

require('prototypes');

var wrench = require('wrench'),
  path = require('path');


module.exports = function (app, config) {

  var files = wrench.readdirSyncRecursive(path.join(config.root, '/lib'));

  files.forEach(function(route) {
    if (route.endsWith("Routes.js")) {
      require(path.join('../', route))(app);
    }

  });

}
