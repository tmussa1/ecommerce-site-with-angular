import { Component, OnInit } from '@angular/core';
import { ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  itemsInCart : any = [];
  constructor(private productService : ProductServiceService) { }

  ngOnInit() {
      this.productService.getItemsInCart().subscribe((cartItems) =>{
        this.itemsInCart = cartItems;
        console.log(this.itemsInCart);
      });

    }
  

}
