import { Injectable } from "@angular/core";
import { ContactRequest as ApiContactRequest } from "../api/models/contact-request.model";

@Injectable()

export class ContactRequest {
    public name: string;
    public email: string;
    public question: string;


    constructor() {}

    public clear() {
        this.name = this.email = this.question = null;
    }

    public get apiContactRequest () {
        let apiContactRequest = new ApiContactRequest();
        apiContactRequest.name = this.name;
        apiContactRequest.email = this.email;
        apiContactRequest.question = this.question;
        return apiContactRequest;
    }
}