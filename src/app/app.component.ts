import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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


@Component({
      selector: 'app-root',
      standalone: true,
      imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent, ContactsComponent, CoursesComponent, AccountInterfaceComponent, CategoriesComponent],
      templateUrl: './app.component.html',
      styleUrl: './app.component.css',
      providers:[UserService]
})
export class AppComponent {
    loginEmail: string = "";

    //Dependency injection del service
    constructor(private userService: UserService) {
        this.userService.getAll().subscribe(result => {
            console.log(result);
        });
    }

    onUserEvent($email: string) {
        this.loginEmail = $email;
    }



    // ngOnInit(): void{
    //     interval(500).subscribe(count => {
    //         console.log(count);
    //     });
    // }


}
