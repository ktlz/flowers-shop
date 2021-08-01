import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { DeliveryType } from "../api/models/delivery-type.enum";
import { Order as ApiOrder } from "../api/models/order.model";
import { OrderItem } from "../api/models/order.model";

@Injectable()

export class Order {
    public name: string;
    public phone: string;
    public address: string;
    public notes: string;
    public deliveryType: DeliveryType;

    constructor(public cart: Cart) {}

    public clear() {
        this.name = this.phone = this.address = this.notes = null;
        this.deliveryType = undefined;
        this.cart.clear();
    }

    public get apiOrder () {
        let apiOrder = new ApiOrder();
        apiOrder.name = this.name;
        apiOrder.address = this.address;
        apiOrder.notes = this.notes;
        apiOrder.phone = this.phone;
        apiOrder.orderItems = this.cart.lines.map(el => { 
            let orderItem = new OrderItem()
            orderItem.product = el.product;
            orderItem.quantity = el.quantity;
            return Object.assign({}, orderItem)
        });
        return apiOrder;
    }
}