import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl = environment.baseUrl;
  
  getProducts(){
    return this.http.get( this.baseUrl + "products");
  }

  getAProduct(id){
    return this.http.get(this.baseUrl + "products/" + id);
  }

  removeAllItemsFromCart(){
    return this.http.delete(this.baseUrl + "api/cart/");
  }

  addItemToCart(item){
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post(this.baseUrl + "api/cart/addToCart", item);
  }

  getItemsInCart(){
    return this.http.get(this.baseUrl + "api/cart/");
  }

  constructor(private http: HttpClient) { }
}
