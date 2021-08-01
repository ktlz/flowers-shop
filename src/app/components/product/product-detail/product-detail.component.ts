import { Component, OnInit } from "@angular/core";
import { Product } from "../../../api/models/product.model";
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cart, CartLine } from "src/app/models/cart.model";
import { BreadcrumbService } from "xng-breadcrumb";



@Component({
    selector: "product-detail",
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-detail.component.styl"]
})

export class ProductDetailComponent implements OnInit {

    public product: Product;
    public quantity: number = 1;

    constructor(private route: ActivatedRoute, 
                private cart: Cart,
                db: AngularFirestore,
                private breadcrumbService: BreadcrumbService) {
        let productId = this.route.snapshot.params['id'];
        db.collection('products').doc(productId).get()
        .subscribe(snapshot => {this.product = snapshot.data() as Product})

        this.breadcrumbService.set('@product', 'asdasd');
    }

    ngOnInit(): void {
        this.breadcrumbService.set('product', 'asdasd');
    }

    addProductToCart() 
    {
        this.cart.addLine(new CartLine(this.product, this.quantity)); 
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