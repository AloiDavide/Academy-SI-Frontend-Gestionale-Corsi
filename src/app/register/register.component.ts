import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../service/user/user.service";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerRequest: RegisterRequest = new RegisterRequest("","","","", [1]);

    @Output()
    registerEvent:EventEmitter<RegisterRequest> = new EventEmitter<RegisterRequest>();
    constructor() {

    }

    submit() {
        this.registerEvent.emit(this.registerRequest);
    }

    onRoleChange($event: Event) {
        let rolesArray = this.registerRequest.roles;
        if (rolesArray.includes(2)){
            let index = rolesArray.indexOf(2);
            this.registerRequest.roles.splice(index,1);
        }
        else{
            this.registerRequest.roles.push(2);
        }

    }
}
