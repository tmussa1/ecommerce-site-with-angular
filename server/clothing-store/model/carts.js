var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    name: 'string',
    price: 'number',
    description: 'string',
    quantity: 'number'
});

var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;