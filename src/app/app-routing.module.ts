import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Register} from '../app/Register/register.component';
import {Login}from '../app/Login/login.component';
const routes: Routes = [
  {
    path: "",
component: Login
},
{
    path:"register",
    component: Register
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
