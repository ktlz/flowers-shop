import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { SlickCarouselModule } from 'ngx-slick-carousel';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component'; 
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { ReviewComponent  } from './components/review/review.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component'
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


import { environment } from '../environments/environment';

import { Cart } from './models/cart.model';


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
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    SlickCarouselModule,
  ],
  providers: [Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
