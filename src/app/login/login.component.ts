import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {FormTitleComponent} from "../form-title/form-title.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormTitleComponent, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    correctPassword:string = "1";
    error:boolean = false;

    buttonDisabled: boolean = false;




    @Output()
    loginEvent: EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();

    //Let's make the NgForm static and accessible everywhere in this component

    onSubmit(loginForm:NgForm) {
        const email = loginForm.value.email;
        const password = loginForm.value.password;

        const loginRequest: LoginRequest = new LoginRequest(email,password);

        console.log(loginForm);
        console.log(email);
        console.log(password);

        if (loginForm.valid) {
            console.log(loginRequest);
            this.loginEvent.emit(loginRequest);

        }

        loginForm.reset()

    }

}
