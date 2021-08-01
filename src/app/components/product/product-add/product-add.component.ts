import { Component, Input, OnChanges } from "@angular/core";
import { Product } from "src/app/api/models/product.model";
import { Cart, CartLine } from "src/app/models/cart.model";


@Component({
    selector: "product-add",
    templateUrl: "product-add.component.html",
    styleUrls: ["product-add.component.styl"]
})

export class ProductsAddComponent implements OnChanges
{

    @Input() product: Product;

    public cartLine: CartLine;

    ngOnChanges() {
        if (this.product) {
            let line = this.cart.lines.find(line => line.product.id == this.product.id); 
            if (line) {
                this.cartLine = line;
            }  
            else {
                this.cartLine = new CartLine(this.product, 0);
            }
        }
    }

    constructor(public cart: Cart) {
    }

    addProductToCart() {
        this.cartLine.quantity = 1;
        this.cart.addLine(this.cartLine); 
    }

    incrementQuantity() {
        this.cartLine.quantity += 1;
    }

    decrementQuantity() {
        this.cartLine.quantity -= 1;
        if (this.cartLine.quantity == 0) {
            this.cart.removeLine(this.cartLine.product.id);
        }
    }
}