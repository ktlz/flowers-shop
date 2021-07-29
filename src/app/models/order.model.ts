import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { DeliveryType } from "../api/models/delivery-type.enum";

@Injectable()

export class Order {
    public id: string;
    public name: string;
    public phone: string;
    public address: string;
    public notes: string;
    public deliveryType: DeliveryType;

    constructor(public cart: Cart) {}

    public clear() {
        this.id = null;
        this.name = this.phone = this.address = this.notes = null;
        this.deliveryType = undefined;
        this.cart.clear();
    }
}