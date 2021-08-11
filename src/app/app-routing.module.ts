import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutCompletedComponent } from './components/checkout-completed/checkout-completed.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductGridComponent } from './components/product/product-grid/product-grid.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
                        { 
                          path: "store", 
                          children: [
                            { 
                              path: "", 
                              component: StoreComponent, 
                            },
                            { 
                              path: "#about", 
                              component: StoreComponent, 
                            },
                            { 
                              path: "#delivery", 
                              component: StoreComponent, 
                            },
                            { 
                              path: "#reviews", 
                              component: StoreComponent, 
                            },
                            { 
                              path: "products",         
                              component: ProductGridComponent,
                            },
                            { 
                              path: "products/:id",         
                              component: ProductDetailComponent,
                            },
                            { 
                              path: "checkout",         
                              children: [
                                {
                                  path: "",
                                  component: CheckoutComponent,

                                },
                                {
                                  path: "completed",         
                                  component: CheckoutCompletedComponent,
                                }
                              ]
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
  imports: [RouterModule.forRoot(routes, {
                                          scrollPositionRestoration: 'enabled', 
                                          anchorScrolling: 'enabled', 
                                          onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
