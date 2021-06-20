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
    private router: Router;

    constructor(db: AngularFirestore,
                router: Router) {
        this.items = db.collection('/products').valueChanges();
        this.router = router;
    }

    click() {
        this.router.navigateByUrl('/home');
    }
}