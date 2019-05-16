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
    return this.http.delete("http://localhost:3000/cart/");
  }

  addItemToCart(item){
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post("http://localhost:3000/cart/addToCart", item);
  }

  getItemsInCart(){
    return this.http.get("http://localhost:3000/cart/");
  }

  constructor(private http: HttpClient) { }
}
