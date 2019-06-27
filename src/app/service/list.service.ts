import {Injectable } from "@angular/core";
import {HttpClient,HttpResponse, HttpHeaders} from "@angular/common/http";
import {Config} from "../Module/Sinhvien.component"
//import{} from "../LocalJson/fake_sinhvien.json"
import { Observable, bindCallback } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpUtilsService} from '../util/http.service';
@Injectable()

export class Loginservice{
    constructor(private http: HttpClient, private httpUtils: HttpUtilsService){}
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
        }
        //err
        handleError;
   urllist = "http://5d11a95184e90600145763a3.mockapi.io/sinhviennam2";
     // urllist ="assets/fake_sinhvien.json";
    // getList(){
    //     return this.http.get<Config[]>(this.urllist);
    arr = this.http.get<Config[]>(this.urllist);
 //   => this.sinhviens.push(sinhvien);
    getSinhvienResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.urllist, { observe: 'response' });
      }
      // add sinhvien
      addsinhvien(Sinhvien : Config): Observable<Config> {
          const httpHeaders = this.httpUtils.getHTTPHeaders() ;
          return  this.http.post<Config>(this.urllist, Sinhvien,  { headers: httpHeaders })
         
      }
     
}