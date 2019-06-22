import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Loginservice } from './service/servicelogin.service';
import {Login} from './Login/login.component';
import {Register} from './Register/register.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Login,
    Register,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Loginservice,],
  bootstrap: [AppComponent]
})
export class AppModule { }
