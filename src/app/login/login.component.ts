import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {UserService} from "../service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginRequest: LoginRequest = new LoginRequest("", "");
    jwtToken:string = "";

    @Output()
    userAccessEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userService: UserService, public router: Router) {

    }

    onSubmit(loginForm: NgForm) {
        console.log(loginForm);
        if (loginForm.valid) {
            console.log(this.loginRequest);

            //Rest call to the backend to register a user
            this.userService.login(this.loginRequest).subscribe({
                next: (result) => {
                    // On successful call
                    console.log('User logged in successfully', result);

                    this.jwtToken = result.token;

                    // Emit the event so that app-component can access the data of the user who just logged in.
                    this.userAccessEvent.emit(this.loginRequest.email);

                    // Navigate back to home.
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    console.error('There was an error during the login process', error);
                    // Display error to the user
                    alert('Login failed. Please double check your form or try again later.');
                }
            });

        }
        loginForm.reset()
    }
}
