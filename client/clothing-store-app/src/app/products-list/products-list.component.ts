import { Component, OnInit , Input} from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductsListComponent implements OnInit {

  productList: any = [];

  constructor(private productService : ProductServiceService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
        this.productList = products;
        console.log(this.productList);
    });
  }

}
