import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

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
    registerRequest: RegisterRequest = new RegisterRequest("","","","",[1]);

    @Output()
    registerEvent:EventEmitter<RegisterRequest> = new EventEmitter<RegisterRequest>();
    constructor() {

    }


    onSubmit(registerForm:NgForm) {
        this.registerRequest.name = registerForm.value.name;
        this.registerRequest.lastName = registerForm.value.lastName;
        this.registerRequest.email = registerForm.value.email;
        this.registerRequest.password = registerForm.value.password;


        console.log(registerForm);

        if (registerForm.valid) {
            console.log(this.registerRequest);
            this.registerEvent.emit(this.registerRequest);

        }

        registerForm.reset()

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
