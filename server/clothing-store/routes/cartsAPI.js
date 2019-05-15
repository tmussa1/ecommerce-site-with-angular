var express = require('express');
var router = express.Router();
var Cart = require('../model/carts.js');
var cartController = require('../controller/cartController.js');
var CartService = cartController.CartService;

router.use((req,res,next)=>{
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
        'Content-Type':'application/json'
    })
    if (req.method == 'OPTIONS'){
        return res.status(200).end();
      }
    next();
});

router.post('/addToCart', (req, res, next)=>{
    
    //console.log(req.body);

    var name  = req.body.name;
    var price = parseInt(req.body.price);
    var quantity = parseInt(req.body.quantity);
    var description = req.body.description;

    var cartItem = new Cart({
        name: name,
        price: price,
        description: description,
        quantity: quantity
    });

    CartService.addItemToCart(cartItem) 
    .then((item)=>{
        res.status(201);
        res.json(item);
    }).catch((err) => {
        res.send(err);
    });
});

router.delete('/:item_id', (req, res, next)=>{

    var id = req.params.item_id;

    CartService.deleteAnItem(id)
    .then((item)=>{
        res.status(200);
        res.json(item);
    }).catch((err) =>{
        res.send(JSON.stringify(err));
    });
  });

module.exports = router;