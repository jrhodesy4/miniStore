var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new mongoose.Schema({
  name: {type: String, required: [true, "The Product name is required"]},
  description: {type: String, required: [true, "The Product description is required"]},
  quantity: {type: Number, required: [true, "The Product quantity is required"]}
  // orders: {type: Schema.Types.ObjectId, ref: 'Order'}
}, {timestamps: true });

mongoose.model('Product', ProductSchema);
