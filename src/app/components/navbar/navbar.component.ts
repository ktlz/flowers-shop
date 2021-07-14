import { Component } from "@angular/core";
import { Cart } from "../../models/cart.model";


@Component({
    selector: "navbar",
    templateUrl: "navbar.component.html",
    styleUrls: ["navbar.component.styl"]
})

export class NavbarComponent {
    public cart: Cart;
    
    constructor(cart: Cart) {
        this.cart = cart;
    }
}