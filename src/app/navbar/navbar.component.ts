import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    @Input("loginEmail")
    loginEmail: string = "";
}
