import {Component, EventEmitter, Output} from '@angular/core';
import {LoginRequest} from "../../model/loginRequest";
import {FormsModule} from "@angular/forms";
import {FormTitleComponent} from "../form-title/form-title.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormTitleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    correctPassword:string = "123456";
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
        }

    }

}
