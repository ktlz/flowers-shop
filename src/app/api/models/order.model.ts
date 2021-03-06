import { DeliveryType } from "./delivery-type.enum";
import { Product } from "./product.model"

export class OrderItem {
    public product: Product;
    public quantity: number;
}

export class Order {
    public name: string;
    public phone: string;
    public address: string;
    public notes: string;
    public deliveryType: DeliveryType;
    public orderItems: object[];
}


