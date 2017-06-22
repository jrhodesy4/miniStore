var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
  getCustomers: (req,res) => {
    Customer.find({}, (err,customers) => {
      if(err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(customers);
      }
    })
  },
  createCustomer: (req,res) => {
    var customer = new Customer(req.body);
    customer.save((err,customer) => {
      if(err) {
        console.log(err);
        return;
      } else{
        res.json(customer);
      }
    })
  },
  deleteCustomer: (req,res) => {
    Customer.remove({_id: req.params.id}, (err,data) => {
      if(err) {
        console.log(err);
        return;
      }else {
        return res.json(data);
      }
    })
  },
  getProducts: (req,res) => {
    Product.find({}, (err,products) => {
      if(err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(products);
      }
    })
  },
  createProduct: (req,res) => {
    var product = new Product(req.body);
    product.save((err,product) => {
      if(err) {
        let errors = ''
        for(let i in err.errors){
          errors += err.errors[i].message
        }
        return res.sendStatus(500).send("Couldn't save the product")
      } else{
        res.json(product);
      }
    })
  },
  getOrders: (req, res) => {
    Order.find({}).populate('customer').populate('product').exec((err, orders) => {
      if(err) {
        console.log(err);
        return res.status(500).send('Unable to retrieve orders from the database')
      } else {
        return res.json(orders)
      }

    })
  },
  createOrder: (req,res) => {
    Product.findOne({_id: req.body.product}, (err, foundProduct) => {
      if(req.body.quantity > foundProduct.quantity) {
        return res.status(500).send("Your purchase cannot exceed quantity")
      }
      var order = new Order(req.body);
      order.save((err,order) => {
        if(err) {
          console.log(err);
          return res.status(500).send('Error saving order in database')
        } else {
          foundProduct.quantity -= req.body.quantity;
          foundProduct.save();
          return res.json(order);
        }
      })
    })
  }














}
