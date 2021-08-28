import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Product } from "../../../api/models/product.model";
import { Cart, CartLine } from "src/app/models/cart.model";


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
        if (!this.cart.lines?.find(cl => cl.product.id == this.product.id)) {
            let cartLine = new CartLine(this.product, 1);
            this.cart.addLine(cartLine);
        }
    }
}