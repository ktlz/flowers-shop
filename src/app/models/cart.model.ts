import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { Product } from "../api/models/product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = []; 
    public itemCount: number = 0; 
    public cartPrice: number = 0;
    
    constructor() {
        this.lines = this.getCartFromLocalStorage();
        this.recalculate();
    }

    addLine(cartLine: CartLine) {
        debugger
        let line = this.lines.find(line => line.product.id == cartLine.product.id); 
        if (line != undefined) {
            line.quantity += cartLine.quantity; 
        } 
        else 
        {
            this.lines.push(cartLine); 
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
        this.lines.splice(index, 1);
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
        let localStorageCartLines = localStorage.getItem('cartLines');

        let parsedCartLines =  localStorageCartLines ? JSON.parse(localStorageCartLines).map(el => new CartLine(el.product, el.quantity)) : [];

        

        return parsedCartLines;
    }
}

export class CartLine {
    
    constructor(public product: Product, public quantity: number) {}
    
    get lineTotal() {
        return this.quantity * this.product.price; 
    }
}
