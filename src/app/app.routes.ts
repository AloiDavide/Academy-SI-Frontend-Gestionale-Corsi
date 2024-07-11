import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {EnrollComponent} from "./enroll/enroll.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'enroll', component:EnrollComponent}
];




