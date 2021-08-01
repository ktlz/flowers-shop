import { Component } from "@angular/core";
import { ProductRepository, ProductFilter } from "src/app/models/product.repository";
import { Product } from "src/app/api/models/product.model";
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";


@Component({
    selector: "product-grid",
    templateUrl: "product-grid.component.html",
    styleUrls: ["product-grid.component.styl"]
})


export class ProductGridComponent {
    public productsPerPage = 9; 
    public selectedPage = 1;

    @ViewChild('searchTextInput') searchTextInput: ElementRef;


    public filter: ProductFilter = {
        selectedCategory: null,
        searchText: null
    }

    
    constructor(public productRepository: ProductRepository) {
    }

    public searchProducts() {
        this.changeCategory();
        this.filter.searchText = this.searchTextInput.nativeElement.value;
    }

    public clearSearchText() {
        this.filter.searchText = null;
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository.getProducts(this.filter)
                                     .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.filter.selectedCategory = newCategory;
        this.changePage(1);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage; 
    }

    get pageCount(): number {
        return Math.ceil(
            this.productRepository
                .getProducts(this.filter).length / this.productsPerPage)
    }
}
