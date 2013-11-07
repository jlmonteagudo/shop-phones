var phoneController = require('./phoneController');


module.exports = function (app) {

  app.get('/api/phones', phoneController.list);
  app.get('/api/phonesPaginated', phoneController.listPaginaged);

}
