import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loginservice } from '../service/list.service';
import {Config} from "../Module/Sinhvien.component"
import { from } from 'rxjs';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class Login implements OnInit {  
    account: { id: number, user: string; pass: string }[] = [];

    constructor(private Loginservice: Loginservice) {
    }
    
    config: Config;
    public list: Config;
    header;
    error;
    ngOnInit() {
        //      this.account = this.Loginservice.getList;
       // this.showlist();
     this.showsinhvienResponse();
    }
    // showlist() {
    //     this.Loginservice.getList().subscribe((list: Sinhvien) => {
    //         this.list = list;
    //     }),error =>this.error = error;
    // }

    showsinhvienResponse(){
        
        this.Loginservice.getSinhvienResponse().subscribe(
            resp =>{
            const keys = resp.headers.keys();
            this.header  = keys.map(key => `
                ${key}: ${resp.headers.get(key)}
            `);
            this.list = resp.body;
            console.log(this.header);
        }
        ),error =>this.error = error;
        
    }


}