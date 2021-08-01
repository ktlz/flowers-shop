import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Review } from "../api/models/review.model";

@Injectable()
export class ReviewRepository {

    private reviews: Review[] = []; 

    constructor(db: AngularFirestore) { 
        db.collection('/reviews').valueChanges().subscribe(data => {
            this.reviews = data.map(el => el as Review);
        })
    }

    getReviews(): Review[] { 
        return this.reviews;
    }
}