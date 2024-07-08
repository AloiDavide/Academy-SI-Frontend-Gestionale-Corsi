import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, DoCheck{
    registerRequest: RegisterRequest = new RegisterRequest("","","","");
    @Output()
    registerEvent:EventEmitter<RegisterRequest> = new EventEmitter<RegisterRequest>();
    constructor() {
    }
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    submit() {
        console.log(this.registerRequest.firstName);
        console.log(this.registerRequest.lastName);
        console.log(this.registerRequest.email);
        console.log(this.registerRequest.password);
    }
}
