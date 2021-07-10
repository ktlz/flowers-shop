import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Review } from "../../models/review.model";

@Component({
    selector: "review",
    templateUrl: "review.component.html",
    styleUrls: ["review.component.styl"]
})

export class ReviewComponent {
    @Input() review: Review;

    constructor() {}
}