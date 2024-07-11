import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        NgIf,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    @Input()
    loginEmail: string = "";

}
