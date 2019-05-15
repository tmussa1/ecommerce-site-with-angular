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
  id : string;

  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductServiceService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getAProduct(this.id).subscribe((incomingProduct) =>{
      this.product = incomingProduct;
    })
  }

}
