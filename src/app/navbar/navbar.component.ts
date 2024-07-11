import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import {UserDto} from "../../model/userDto";

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
    logged:boolean = false;
    @Input()
    loggedUser!: UserDto;

    @Output()
    userSignOutEvent: EventEmitter<any> = new EventEmitter<any>();

    onSignOut() {
        this.userSignOutEvent.emit();
    }
}
