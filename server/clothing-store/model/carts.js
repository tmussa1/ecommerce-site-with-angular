var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    name: 'string',
    price: 'number',
    description: 'string',
    quantity: 'number',
    imageUrl: 'string',
    subtotal: 'string'
});

var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;