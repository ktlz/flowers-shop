import { Component } from "@angular/core";
import { Product } from "../../../api/models/product.model";
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cart, CartLine } from "src/app/models/cart.model";
import { ProductRepository } from "src/app/models/product.repository";



@Component({
    selector: "product-detail",
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-detail.component.styl"]
})

export class ProductDetailComponent {

    constructor(private route: ActivatedRoute, 
                private productRepository: ProductRepository) {
    }

    get product(): Product {
        return this.productRepository.getProduct(this.route.snapshot.params['id']);
    }
}