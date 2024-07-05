import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CoursesComponent} from "./courses/courses.component";
import {AccountInterfaceComponent} from "./account-interface/account-interface.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent, ContactsComponent, CoursesComponent, AccountInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionale_corsi';
}
