import { Component } from '@angular/core';
import { Loginservice } from "./service/servicelogin.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private Loginservice: Loginservice){}
 
  
  
  parenaccount(val){
    this.Loginservice.addaccount(val.id,val.user,val.pass); 
  }
  deleacc(val){
    this.Loginservice.deleteaccount(val);
  }
}
