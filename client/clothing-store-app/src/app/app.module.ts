import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    HomepageComponent,
    AboutComponent,
    SubscribeComponent,
    EmptyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
