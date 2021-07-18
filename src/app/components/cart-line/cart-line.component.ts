import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { CartLine } from "src/app/models/cart.model";


@Component({
    selector: "cart-line",
    templateUrl: "cart-line.component.html",
    styleUrls: ["cart-line.component.styl"]
})

export class CartLineComponent {

    @Input() line: CartLine;

    

    constructor() {
    }

}