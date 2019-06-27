import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Loginservice } from './service/list.service';
import {Login} from './Login/login.component';
import {Register} from './Register/register.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {HttpUtilsService} from './util/http.service';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Register,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Loginservice,HttpUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
