import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, DoCheck{

    constructor() {
    }
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

}
