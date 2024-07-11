import {Component} from '@angular/core';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
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
          NgIf
      ],
      templateUrl: './app.component.html',
      styleUrl: './app.component.css',
      providers:[UserService]
})
export class AppComponent {
    logged:boolean=false;
    loggedUser!: UserDto;

    isHomePage:boolean = false;
    isLoginPage:boolean = false;
    isRegisterPage:boolean = false;
    isEnrollPage:boolean = false;
    constructor(public router: Router, private userService:UserService) {
        this.router.events.subscribe(event => {

            //somewhat superfluous handling of routing, the app isn't complex enough for this yet
            if (event instanceof NavigationEnd) {
                this.isHomePage = this.router.url === '/';
                this.isLoginPage = this.router.url === '/login';
                this.isRegisterPage = this.router.url === '/register';
                this.isEnrollPage = this.router.url === '/enroll';
            }
    });
}

    //after a login or sign up, fetches the user by email

    onUserAccessEvent($email: string) {
        this.userService.getUserByMail($email).subscribe({
            next: (result)=>{
                this.loggedUser = result;
            },
            error:(error) =>{
                console.error('There was an error during the registration process', error);
                    // Display error to the user
                    alert('Login failed. We couldn\'t find your account.');
                    this.onSignOut();
            }

        });
        this.logged = true;
    }


    onEnrollEvent($event: EnrollRequest) {

    }


    onSignOut() {
        this.logged=false;
    }
}
