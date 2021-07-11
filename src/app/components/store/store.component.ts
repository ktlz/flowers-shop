import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from "@angular/router";


@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ["store.component.styl"]
})

export class StoreComponent {
    public items: Observable<any[]>;
    public reviews: Observable<any[]>;
    private router: Router;
    private slideConfig = 
    {
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: true
    };


    constructor(db: AngularFirestore,
                router: Router) {
        this.items = db.collection('/products').valueChanges();
        this.reviews = db.collection('/reviews').valueChanges();
        this.router = router;
    }

    click() {
        this.router.navigateByUrl('/home');
    }
}