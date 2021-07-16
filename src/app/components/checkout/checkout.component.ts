import { Component } from "@angular/core";
import { Cart } from "src/app/models/cart.model";
import { BreadcrumbService } from "xng-breadcrumb";


@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.styl"]
})

export class CheckoutComponent{

    constructor(
                private cart: Cart) {
        // debugger
        console.log(cart)
    }

}