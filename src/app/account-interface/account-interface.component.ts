import {Component, EventEmitter, Output} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {EnrollComponent} from "../enroll/enroll.component";
import {LoginRequest} from "../../model/loginRequest";
import {RegisterRequest} from "../../model/registerRequest";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-account-interface',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, EnrollComponent, CommonModule],
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
        this.showLoggedUser($login.email);
    }

    onRegisterEvent($register: RegisterRequest) {
        this.isLogged = true;
        this.loginEmail = $register.email;
        this.showLoggedUser($register.email);
    }

    showLoggedUser(email: string){
        this.userEvent.emit(email);
    }
}
