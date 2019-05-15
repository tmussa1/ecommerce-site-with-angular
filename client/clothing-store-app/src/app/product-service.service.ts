import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.baseUrl + "products/" + id)
  }

  constructor(private http: HttpClient) { }
}
