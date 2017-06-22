var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new mongoose.Schema({
  customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: {type: Number, required: true}
  // orders: {type: Schema.Types.ObjectId, ref: 'Order'}
}, {timestamps: true });

mongoose.model('Order', OrderSchema);
