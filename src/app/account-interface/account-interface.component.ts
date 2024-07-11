import {Component, EventEmitter, Output} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {EnrollComponent} from "../enroll/enroll.component";
import {LoginRequest} from "../../model/loginRequest";
import {RegisterRequest} from "../../model/registerRequest";
import {UserService} from "../service/user/user.service";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-account-interface',
    standalone: true,
    imports: [RegisterComponent, LoginComponent, EnrollComponent, NgIf],
    templateUrl: './account-interface.component.html',
    styleUrl: './account-interface.component.css',
    providers: [UserService]
})
export class AccountInterfaceComponent {
    loginEmail: string = "";
    isLogged: boolean = false;

    @Output()
    userEvent: EventEmitter<string> = new EventEmitter<string>();


    constructor(private userService: UserService, public router: Router) {}

    onLoginEvent($login: LoginRequest) {
        this.doLogin($login.email);
    }

    onRegisterEvent($register: RegisterRequest) {
        this.userService.register($register).subscribe();
        console.log($register);
        //TODO check for a positive response from the api before proceeding
        this.doLogin($register.email);
    }


    doLogin(email:string){
        this.loginEmail = email;
        this.isLogged = true;
        this.userEvent.emit(email);
        this.router.navigate(['/']);

    }

    //Password$1


}
