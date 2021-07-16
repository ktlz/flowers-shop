import { Component, OnInit } from "@angular/core";
import { Product } from "../../../models/product.model";
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cart } from "src/app/models/cart.model";




@Component({
    selector: "product-detail",
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-detail.component.styl"]
})

export class ProductDetailComponent implements OnInit {

    private product: Product;
    private quantity: number = 1;

    constructor(private route: ActivatedRoute, 
                private cart: Cart,
                db: AngularFirestore) {
        let productId = this.route.snapshot.params['id'];
        db.collection('products').doc(productId).get()
        .subscribe(snapshot => {this.product = snapshot.data() as Product})
    }

    ngOnInit(): void {
        this.breadcrumbService
    }

    addProductToCart() 
    {
        this.cart.addLine(this.product, this.quantity); 
    }

    plusQuantity() {
        this.quantity += 1;
    }

    minusQuantity() {
        if (this.quantity >= 2) {
            this.quantity -= 1;
        }
    }
}