import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = []; 
    public itemCount: number = 0; 
    public cartPrice: number = 0;

    constructor() {
        this.lines = this.getCartFromLocalStorage();
        this.recalculate();
    }

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id); 
        if (line != undefined) {
            line.quantity += quantity; 
        } 
        else 
        {
            this.lines.push(new CartLine(product, quantity)); 
        }
        this.recalculate(); 
        this.putCartToLocalStorage();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id); 
        if (line != undefined) {
            line.quantity = Number(quantity); 
        }
        this.recalculate(); 
        this.putCartToLocalStorage();
    }

    removeLine(id: string) {
        let index = this.lines.findIndex(line => line.product.id == id); 
        this.lines.splice(index);
        this.recalculate();
        this.putCartToLocalStorage();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0; 
        this.putCartToLocalStorage();
    }

    private recalculate() { 
        this.itemCount = 0; 
        this.cartPrice = 0; 
        
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price); 
        });
    }  
    
    private putCartToLocalStorage() 
    {
        localStorage.setItem('cartLines', JSON.stringify(this.lines));
    }

    private getCartFromLocalStorage()
    {
        let cartLines = localStorage.getItem('cartLines');

        return cartLines ? JSON.parse(cartLines) : [];
    }
}

export class CartLine {
    
    constructor(public product: Product, public quantity: number) {}
    
    get lineTotal() {
        return this.quantity * this.product.price; 
    }
}