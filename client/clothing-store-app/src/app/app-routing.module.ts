import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomepageComponent} from '../app/homepage/homepage.component';
import { ProductDetailsComponent} from '../app/product-details/product-details.component';
import { AboutComponent } from '../app/about/about.component';
import { SubscribeComponent} from '../app/subscribe/subscribe.component';
import { EmptyCartComponent } from '../app/empty-cart/empty-cart.component';

const routes: Routes = [{path: '', component: HomepageComponent},
{path: 'products/list', component: ProductsListComponent},
{path: 'about', component: AboutComponent},
{path: 'subscribe', component: SubscribeComponent},
{path: 'products/:id', component: ProductDetailsComponent},
{path: 'cart', component: EmptyCartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
