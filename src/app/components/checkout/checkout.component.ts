import { Component } from "@angular/core";
import { Cart } from "src/app/models/cart.model";


@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.styl"]
})

export class CheckoutComponent{

    constructor(
        public cart: Cart
        ) {
    }

    public deleleCartLine = (id: string) => {
        this.cart.removeLine(id);
    }

}

