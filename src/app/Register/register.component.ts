import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Loginservice } from '../service/list.service';
import {Config} from '../Module/Sinhvien.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
    .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
      }
      
      .ng-invalid:not(form),  {
        border-left: 5px solid #a94442; /* red */
      }
      `]
})

export class Register implements OnInit {
    constructor(private Loginservice: Loginservice) {
    }
    clicker :boolean = false;
    @Output() newaccount = new EventEmitter<{ id: number, user: string, pass: string }>();
    register(user: string, pass: string) {
        this.newaccount.emit({ id: this.getRandomid(), user: user, pass: pass })
    }
    sinhvien :Config;
    getRandomid() {
         return Math.floor(Math.random() * 100);
    }
    namee;
    passe;
    sinhviens : Config[];
    ngOnInit() {
      
    }
    addsinhvien(){
     this.sinhvien={id:"51",name:this.namee, pass:this.passe,status:true}
      this.Loginservice.addsinhvien(this.sinhvien).subscribe();
this.clicker = !this.clicker;
    }
}