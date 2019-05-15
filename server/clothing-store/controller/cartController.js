var Cart = require('../model/carts.js');

class CartService{

    static addItemToCart(item){
        console.log("YEAAAAH")
        const item = new Cart(item);
        return item.save();
    }

    static deleteAnItem(id){
        return Cart.deleteOne({_id : id})
        .then((item)=>{
            return item;
        })
    }
}

module.exports.CartService = CartService;