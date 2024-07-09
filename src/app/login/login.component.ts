import {Component, EventEmitter, Output} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule} from "@angular/forms";
import {FormTitleComponent} from "../form-title/form-title.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormTitleComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    correctPassword:string = "1";
    error:boolean = false;

    buttonDisabled: boolean = false;


    loginRequest: LoginRequest = new LoginRequest("","");
    @Output()
    loginEvent: EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();

    submit() {
        if (this.loginRequest.password == this.correctPassword){
            console.log(this.loginRequest);
            //Emettiamo un login event quando viene premuto submit e passiamo l'oggetto con i dati
            this.loginEvent.emit(this.loginRequest);
        }
        else{
            console.log("password errata");
            this.error = true;
        }

    }

}
