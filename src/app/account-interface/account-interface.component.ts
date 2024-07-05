import { Component } from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {EnrollComponent} from "../enroll/enroll.component";

@Component({
  selector: 'app-account-interface',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, EnrollComponent],
  templateUrl: './account-interface.component.html',
  styleUrl: './account-interface.component.css'
})
export class AccountInterfaceComponent {

}
