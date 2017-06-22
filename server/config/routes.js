var controller = require('./../controllers/controller');

module.exports = app => {
  app.get('/api/customers', controller.getCustomers);
  app.post('/api/customers', controller.createCustomer);
  app.delete('/api/customers/:id', controller.deleteCustomer);

  app.get('/api/products', controller.getProducts);
  app.post('/api/products', controller.createProduct);

  app.get('/api/orders', controller.getOrders);
  app.post('/api/orders', controller.createOrder)
}
