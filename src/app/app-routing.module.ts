import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
                        { 
                          path: "store", 
                          data: { breadcrumb: { skip: true, } },
                          children: [
                            { 
                              path: "", 
                              component: StoreComponent, 
                            },
                            { 
                              path: "products/:id",         
                              component: ProductDetailComponent,
                              data: { breadcrumb: { alias: 'product' } },
                            },
                            { 
                              path: "checkout",         
                              component: CheckoutComponent,
                              data: { breadcrumb: { label: 'Корзина' } },
                            }
                          ]
                        },
                        { 
                          path: "", 
                          redirectTo: "/store", 
                          data: { breadcrumb: { label: 'Магазин' } },
                          pathMatch: 'full' 
                        }
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
