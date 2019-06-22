import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Loginservice } from '../service/servicelogin.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class Login implements OnInit {
    account: { id: number, user: string; pass: string }[] = [];

    constructor(private Loginservice: Loginservice) {
    }

    ngOnInit() {
        this.account = this.Loginservice.account;
    }

    @Output() deleteaccount = new EventEmitter<number>();
    deleteacc(va:number) {
        this.deleteaccount.emit(va);
    }
}