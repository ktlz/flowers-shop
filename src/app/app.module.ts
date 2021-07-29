import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component'; 
import { SubmitComponent } from './components/submit/submit.component'; 
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { ReviewComponent  } from './components/review/review.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component'
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartLineComponent } from './components/cart-line/cart-line.component';

import { environment } from '../environments/environment';

import { Cart } from './models/cart.model';
import { Order } from './models/order.model';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductCardComponent,
    NavbarComponent,
    MapComponent,
    ReviewComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    CartLineComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    SlickCarouselModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    Cart, 
    Order,
    BreadcrumbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

