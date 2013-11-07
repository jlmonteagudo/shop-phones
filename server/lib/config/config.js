var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    db: 'mongodb://localhost/shop-phones',
    root: rootPath,
  },
  test: {
    db: 'mongodb://localhost/shop-phones',
    root: rootPath,
  },
  production: {
    db: 'mongodb://localhost/shop-phones',
    root: rootPath,
  }
}
