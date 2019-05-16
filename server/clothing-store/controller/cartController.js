var Cart = require('../model/carts.js');

class CartService{

    static addItemToCart(item){
        const cartItem = new Cart(item);
        return cartItem.save();
    }

    static deleteAnItem(id){
        return Cart.deleteOne({_id : id})
        .then((item)=>{
            return item;
        })
    }

    static getAllItemsInCart(){
        return Cart.find({})
        .then(function(items) {
            return items;
        });
    }

    static removeAllItemsFromCart(){
        return Cart.deleteMany({})
        .then((items)=>{
            return items;
        })
    }
}

module.exports.CartService = CartService;