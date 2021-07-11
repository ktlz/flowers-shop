import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
                        { 
                          path: 'home', 
                          component: StoreComponent 
                        },
                        { 
                          path: '', 
                          redirectTo: '/home', 
                          pathMatch: 'full' 
                        },
                        { 
                          path: "products/:id",         
                          component: ProductDetailComponent,
                          pathMatch: 'full' 
                        }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
