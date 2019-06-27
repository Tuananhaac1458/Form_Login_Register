import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loginservice } from '../service/list.service';
import {Config} from "../Module/Sinhvien.component";
import {HttpUtilsService} from '../util/http.service';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class Login implements OnInit {  
    account: { id: number, user: string; pass: string }[] = [];

    constructor(private Loginservice: Loginservice,private httpUtils: HttpUtilsService, private http : HttpClient) {
       
    }
    
    config: Config;
    public list: Config;
    header;
    error;
    urllist;
    ngOnInit() {
        //      this.account = this.Loginservice.getList;
       // this.showlist();
     this.showsinhvienResponse();
     this.urllist = this.Loginservice.urllist;
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
          //  console.log(this.header);
        }
        ),error =>this.error = error;
        
    }


    deleteacc(id){
        console.log(this.urllist+"/?id="+id);
        const httpHeaders = this.httpUtils.getHTTPHeaders() ;
        alert("Reload de xem ket qua");
        return this.http.delete(this.urllist+"/"+id, {headers: httpHeaders}).subscribe();
      }   

}