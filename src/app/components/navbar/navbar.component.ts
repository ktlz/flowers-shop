import { Component } from "@angular/core";
import { Cart } from "../../models/cart.model";
import { Router } from "@angular/router";


@Component({
    selector: "navbar",
    templateUrl: "navbar.component.html",
    styleUrls: ["navbar.component.styl"]
})

export class NavbarComponent {
    public cart: Cart;
    
    constructor(cart: Cart, 
                private router: Router) {
        this.cart = cart;
    }

    navigate(sectionToNavigate: string) {
        this.router.navigateByUrl('/store#'+sectionToNavigate);
    }
}