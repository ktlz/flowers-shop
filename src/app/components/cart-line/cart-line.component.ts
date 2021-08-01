import { Component } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";
import { CartLine } from "src/app/models/cart.model";


@Component({
    selector: "cart-line",
    templateUrl: "cart-line.component.html",
    styleUrls: ["cart-line.component.styl"]
})

export class CartLineComponent {

    @Input() line: CartLine;
    @Input() deleteCartLine: Function;


    

    constructor() {
    }

    delete(id: string) {
        this.deleteCartLine(id);
    }

}