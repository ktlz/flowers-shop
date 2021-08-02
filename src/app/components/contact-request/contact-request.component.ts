import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { ContactRequest } from "src/app/models/contact-request.model";
@Component({
    selector: "contact-request",
    templateUrl: "contact-request.component.html",
    styleUrls: ["contact-request.component.styl"]
})

export class ContactRequestComponent implements OnInit{

    public formGroup: FormGroup;

    constructor(public contactRequest: ContactRequest,
                public db: AngularFirestore) {
    }

    public sendContactRequest() {
        debugger
        let apiContactRequest = this.contactRequest.apiContactRequest;
        this.db.collection('contactRequests').add({...apiContactRequest})
        this.contactRequest.clear();
    }

    ngOnInit() {
        this.contactRequest = new ContactRequest();
        this.formGroup = new FormGroup({
            name: new FormControl(this.contactRequest.name, [Validators.required]),
            email: new FormControl(this.contactRequest.email, [Validators.required]),
            question: new FormControl(this.contactRequest.question, [Validators.required]),
        });
    }  

    get name() { return this.formGroup.get('name'); }

    get email() { return this.formGroup.get('email'); }

    get question() { return this.formGroup.get('question'); }
}