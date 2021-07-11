import { Component } from "@angular/core";
import { Product } from "../../../models/product.model";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { bindCallback } from "rxjs";




@Component({
    selector: "product-detail",
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-detail.component.styl"]
})

export class ProductDetailComponent {

    private productId: string;
    private product: Product;

    constructor(private route: ActivatedRoute, db: AngularFirestore) {
        let productId = this.route.snapshot.params['id'];
        db.collection('products').doc(productId).get()
        .subscribe(snapshot => {this.product = snapshot.data() as Product})
    }
}