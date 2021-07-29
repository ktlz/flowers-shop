import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Order } from "src/app/models/order.model";
import { DeliveryType } from "src/app/api/models/delivery-type.enum";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
    selector: "submit",
    templateUrl: "submit.component.html",
    styleUrls: ["submit.component.styl"]
})

export class SubmitComponent implements OnInit{
    public DeliveryTypeEnum = DeliveryType;
    public formGroup: FormGroup;

    constructor(public order: Order, 
                public db: AngularFirestore) {
    }

    public submitOrder() {
        debugger
        this.db.collection('orders').add(this.order)
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            name: new FormControl(this.order.name),
            phone: new FormControl(this.order.phone, [Validators.required]),
            address: new FormControl(this.order.address, []),
            notes: new FormControl(this.order.notes, []),
            deliveryType: new FormControl('delivery')
        })

        this.formGroup.get('deliveryType').valueChanges.subscribe(val => {
            if (val == this.DeliveryTypeEnum.delivery) {
              this.formGroup.controls['address'].setValidators([Validators.required]);
            } else {
              this.formGroup.controls['address'].clearValidators();
            }
            this.formGroup.controls['address'].updateValueAndValidity();
          });
    }

    get deliveryType() { return this.formGroup.get('deliveryType'); }

    get name() { return this.formGroup.get('name'); }

    get phone() { return this.formGroup.get('phone'); }

    get address() { return this.formGroup.get('address'); }


}