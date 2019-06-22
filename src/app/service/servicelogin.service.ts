


export class Loginservice {


    account = [{ id: 0, user: 'tuananh', pass: '123' }];
    arrid = [];
    addaccount(id: number, user: string, pass: string) {
        this.account.push({ id: id, user: user, pass: pass });
        this.consologservice('Register Success');
    }
    deleteaccount(id:number){
        this.account.splice(id,1);
        this.consologservice('Delete Success');
    }
    updatepass(id: number, pass: string) {
        if (this.account[id].id = id) {
            this.account[id].pass = pass;
        } else {
            this.consologservice('Wrong!');
        }
    }
    
    consologservice(val: string) {
        console.log(val);
    }

    checkid(id) : boolean {
        for(let i =0; i < this.account.length; i++){
            this.arrid.push(this.account[i].id);    
        }
       this.arrid.forEach(function (val){
            if(id==val){
                return false;
            }
            else return true;
       })
       return false;
    }
}