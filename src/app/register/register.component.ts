import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterRequest} from "../../model/registerRequest";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
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
    registerRequest: RegisterRequest = new RegisterRequest("", "", "", "", [1]);

    @Output()
    userAccessEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userService: UserService, public router: Router) {

    }


    onSubmit(registerForm: NgForm) {
        console.log(registerForm);
        if (registerForm.valid) {
            console.log(this.registerRequest);

            //Rest call to the backend to register a user
            this.userService.register(this.registerRequest).subscribe({
                next: (result) => {
                    // On successful call
                    console.log('User registered successfully', result);

                    // Emit the event so that app-component can access the data of the user who just registered.
                    this.userAccessEvent.emit(this.registerRequest.mail);

                    // Navigate back to home.
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    console.error('There was an error during the registration process', error);
                    // Display error to the user
                    alert('Registration failed. Please double check your form or try again later.');
                }
            });

        }
        registerForm.reset()
    }

    //
    onRoleChange($event: Event) {
        let rolesArray = this.registerRequest.roles;
        if (rolesArray.includes(2)) {
            let index = rolesArray.indexOf(2);
            this.registerRequest.roles.splice(index, 1);
        } else {
            this.registerRequest.roles.push(2);
        }

    }
}
