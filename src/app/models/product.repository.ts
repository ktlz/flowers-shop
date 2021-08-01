import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Product } from "../api/models/product.model";

@Injectable()
export class ProductRepository {

    private products: Product[] = []; 
    private categories: string[] = [];
    private minProductPrice: number = 0;
    private maxProductPrice: number = 0;

    constructor(db: AngularFirestore) { 
        db.collection('/products').valueChanges().subscribe(data => {
            this.products = data.map(el => el as Product);
            this.categories = this.products.map(
                pr => pr.category)
            .filter(
                (c, index, array) => array.indexOf(c) == index)
            .sort()
            this.minProductPrice = Math.min(...this.products.map(pr => pr.price as number));
            this.maxProductPrice = Math.max(...this.products.map(pr => pr.price as number));    
        })
    }

    getProducts(filter: ProductFilter = null): Product[] { 
        if (!filter || !filter.selectedCategory && !filter.searchText) {
            return this.products;
        }
        return this.products.filter(pr =>  (filter.searchText == null ||
                                            pr.name.toLowerCase().includes(filter.searchText.toLowerCase()) ||
                                            pr.description.toLowerCase().includes(filter.searchText.toLowerCase())) && 
                                            (filter.selectedCategory == null || 
                                            filter.selectedCategory == pr.category));

    }

    getProduct(id: string): Product 
    {
        return this.products.find(p => p.id == id); 
    }
    
    getCategories(): string[] {
        return this.categories; 
    }

    get minPrice(): number {
        return this.minProductPrice;
    }

    get maxPrice(): number {
        return this.maxProductPrice;
    }
}

export interface ProductFilter {
    selectedCategory: string;
    searchText: string;
}