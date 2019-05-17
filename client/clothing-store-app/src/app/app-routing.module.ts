import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomepageComponent} from '../app/homepage/homepage.component';
import { ProductDetailsComponent} from '../app/product-details/product-details.component';
import { AboutComponent } from '../app/about/about.component';
import { SubscribeComponent} from '../app/subscribe/subscribe.component';
import { EmptyCartComponent } from '../app/empty-cart/empty-cart.component';
import { ConfirmationComponent } from '../app/confirmation/confirmation.component';
import { NotificationComponent } from '../app/notification/notification.component';

const routes: Routes = [{path: '', component: HomepageComponent},
{path: 'productslist', component: ProductsListComponent},
{path: 'about', component: AboutComponent},
{path: 'subscribe', component: SubscribeComponent},
{path: 'products/:id', component: ProductDetailsComponent},
{path: 'cart', component: ProductDetailsComponent},
{path: 'empty', component: EmptyCartComponent},
{path: 'confirmation', component: ConfirmationComponent },
{path: 'notification', component: NotificationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
