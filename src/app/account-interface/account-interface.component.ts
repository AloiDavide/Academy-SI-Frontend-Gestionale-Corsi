import {Component, EventEmitter, Output} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {EnrollComponent} from "../enroll/enroll.component";
import {LoginRequest} from "../../model/loginRequest";

@Component({
  selector: 'app-account-interface',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, EnrollComponent],
  templateUrl: './account-interface.component.html',
  styleUrl: './account-interface.component.css'
})
export class AccountInterfaceComponent {
    loginEmail: string = "";
    isLogged: boolean = false;

    @Output()
    userEvent: EventEmitter<string> = new EventEmitter<string>();

    onLoginEvent($login: LoginRequest) {
        this.isLogged = true;
        this.loginEmail = $login.email;
        this.userEvent.emit($login.email);
    }

    onRegisterEvent($event: RegisterRequest) {
        
    }
}
