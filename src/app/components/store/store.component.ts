import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/api/models/product.model";
import { ProductRepository } from "src/app/models/product.repository";
import { ReviewRepository } from "src/app/models/review.repository";
import { Review } from "src/app/api/models/review.model";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ["store.component.styl"]
})

export class StoreComponent {
    private router: Router;
    public slideConfig = 
    {
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: true
    };


    constructor(
                public reviewRepository: ReviewRepository,
                public productRepository: ProductRepository,
                router: Router) {
        this.router = router;
    }


    get products(): Product[] {
        return this.productRepository.getProducts();
    }

    get reviews(): Review[] {
        return this.reviewRepository.getReviews();
    }

    click() {
        this.router.navigateByUrl('/home');
    }
}