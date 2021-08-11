import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { Ng5SliderModule } from 'ng5-slider';



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
import { ProductGridComponent } from './components/product/product-grid/product-grid.component';
import { ProductsAddComponent } from './components/product/product-add/product-add.component';
import { ContactRequestComponent } from './components/contact-request/contact-request.component';
import { CheckoutCompletedComponent } from './components/checkout-completed/checkout-completed.component';

import { environment } from '../environments/environment';

import { Cart } from './models/cart.model';
import { Order } from './models/order.model';
import { ContactRequest } from './models/contact-request.model';
import { ProductRepository } from './models/product.repository';
import { ReviewRepository } from './models/review.repository';

import { CounterDirective } from './directives/counter.directive';

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
    SubmitComponent, 
    ProductGridComponent,
    CounterDirective,
    ProductsAddComponent,
    ContactRequestComponent,
    CheckoutCompletedComponent
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
    Ng5SliderModule,
  ],
  providers: [
    Cart, 
    Order,
    ContactRequest,
    BreadcrumbService,
    ProductRepository,
    ReviewRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

