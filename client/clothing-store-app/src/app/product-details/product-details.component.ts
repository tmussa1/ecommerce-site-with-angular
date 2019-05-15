import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductServiceService} from '../../app/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = {};
  cart = {};
  totalPrice : number;
  id : string;

  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductServiceService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getAProduct(this.id).subscribe((incomingProduct) =>{
      this.product = incomingProduct;
      this.cart = {name: incomingProduct["name"],
                   price: incomingProduct["price"],
                   description: incomingProduct["description"],
                   quantity: 1
      };
      this.totalPrice = parseInt(this.cart["price"]) * parseInt(this.cart["quantity"]);
      //this.saveItemToCart(this.cart);
    })
  }

  updateQuantity(aform){
    this.cart["quantity"] = parseInt(aform.value.quantity);
    this.totalPrice = parseInt(this.cart["price"]) * parseInt(aform.value.quantity);
    this.saveItemToCart(this.cart);
  }

  saveItemToCart(item){
    this.productService.addItemToCart(item).subscribe(item => {
        console.log(item);
    })
  }

  removeItems(bform){
    console.log(bform.value);
  }

}
