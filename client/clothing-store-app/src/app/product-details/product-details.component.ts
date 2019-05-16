import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductServiceService} from '../../app/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = {};
  newItem = {};
  cartArray : any = [];
  totalPrice : number;
  id : string;
   
  constructor(private activatedRoute : ActivatedRoute, private router : Router,
    private productService : ProductServiceService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getAProduct(this.id).subscribe((incomingProduct) =>{
      this.product = incomingProduct;
      this.newItem ={ name: incomingProduct["name"],
                   price: incomingProduct["price"],
                   description: incomingProduct["description"],
                   quantity: 1,
                   imageUrl: incomingProduct['imageUrl'],
                   subtotal: incomingProduct["price"]
      };

      this.saveItemToCart(this.newItem);
      this.calculateTotal();
    })
    this.fetchItemsInCart();
  }

  updateQuantity(aform){
    this.calculateTotal();
    this.router.navigate(['/confirmation']);
  }

  saveItemToCart(item){
    var found = false;

    for(var i = 0; i < this.cartArray.length; i ++){
      if(this.cartArray[i].name == item.name){
          found = true;
      }
    }

    if(!found){
      this.productService.addItemToCart(item).subscribe(item => {
          this.fetchItemsInCart();
          return item;
      })
  }
  }

  removeItems(){
    this.productService.removeAllItemsFromCart().subscribe(items =>{
      this.fetchItemsInCart();
      this.router.navigate(['/empty']);
    })
  }

  calculateTotal() {
    var total = 0;
    for(var i = 0; i < this.cartArray.length; i++){
        this.cartArray[i].subtotal = this.cartArray[i].quantity * this.cartArray[i].price;
        total += this.cartArray[i].quantity * this.cartArray[i].price;
    }
    this.totalPrice = total;
  }

  fetchItemsInCart(){
    return this.productService.getItemsInCart().subscribe((cartItems) =>{
      this.cartArray = cartItems;
    })
  }

  navigateToEmptyCart(){
    if(this.cartArray == undefined && this.cartArray.length == 0){
      this.router.navigate(['/empty']);
    }
  }

}
