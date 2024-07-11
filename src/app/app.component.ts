import {Component} from '@angular/core';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CoursesComponent} from "./courses/courses.component";
import {AccountInterfaceComponent} from "./account-interface/account-interface.component";
import {CategoriesComponent} from "./categories/categories.component";
import {interval} from "rxjs";
import {UserService} from "./service/user/user.service";
import {UserDto} from "../model/userDto";
import {NgIf} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {EnrollComponent} from "./enroll/enroll.component";
import {LoginRequest} from "../model/loginRequest";
import {RegisterRequest} from "../model/registerRequest";
import {EnrollRequest} from "../model/enrollRequest";

@Component({
      selector: 'app-root',
      standalone: true,
      imports: [
          RouterOutlet,
          NavbarComponent,
          FooterComponent,
          HomeComponent,
          LoginComponent,
          RegisterComponent,
          EnrollComponent,
          AccountInterfaceComponent,
          NgIf
      ],
      templateUrl: './app.component.html',
      styleUrl: './app.component.css',
      providers:[UserService]
})
export class AppComponent {
    loginEmail: string = "";

    isHomePage:boolean = false;
    isLoginPage:boolean = false;
    isRegisterPage:boolean = false;
    isEnrollPage:boolean = false;
    constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.isHomePage = this.router.url === '/';
            this.isLoginPage = this.router.url === '/login';
            this.isRegisterPage = this.router.url === '/register';
            this.isEnrollPage = this.router.url === '/enroll';
        }
    });


}


    //Dependency injection del service che stampa tutti gli utenti nella console
    // constructor(private userService: UserService) {
    //     this.userService.getAll().subscribe(result => {
    //         console.log(result);
    //     });
    // }
    onUserEvent($email: string) {
        this.loginEmail = $email;
    }

    onLoginEvent($login: LoginRequest) {

    }

    onRegisterEvent($register: RegisterRequest) {

    }

    onEnrollEvent($event: EnrollRequest) {

    }
}
