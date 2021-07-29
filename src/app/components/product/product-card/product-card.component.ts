import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Product } from "../../../api/models/product.model";
import { Cart } from "src/app/models/cart.model";


@Component({
    selector: "product-card",
    templateUrl: "product-card.component.html",
    styleUrls: ["product-card.component.styl"]
})

export class ProductCardComponent {

    @Input() product: Product;

    

    constructor(private cart: Cart) {
    }

    addProductToCart() 
    {
        this.cart.addLine(this.product); 
    }
}