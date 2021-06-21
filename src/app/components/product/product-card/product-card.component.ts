import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Product } from "../../../models/product.model";



@Component({
    selector: "product-card",
    templateUrl: "product-card.component.html",
    styleUrls: ["product-card.component.styl"]
})

export class ProductCardComponent {

    @Input() product: Product;


    constructor() {
        console.log(this.product);
    }
}