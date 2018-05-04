import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the SmartHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartHttpProvider {
private _url:string ='https://mqtt-heroku.herokuapp.com'
private headers: HttpHeaders;
constructor(private http: HttpClient) {
  //{ "Authorization": `Bearer ${_dsInfo.resource.at}`}
    this.headers = new HttpHeaders();  
}

get<T>(url: string): Observable<T> {
    return this.http.get(`${this._url}${url}`)
        .map((r: T) => r)
        .catch(this.handleError);
}

 post<T>(url: string, data: any): Observable<T> {
     return this.http.post(`${this._url}${url}`, data)
        .map((r: T) => r)
        .catch(this.handleError);
}

 put<T>(url: string, data: any): Observable<T> {
     return this.http.put(`${this._url}${url}`, data)
        .map((r: T) => r)
        .catch(this.handleError);
}

 private handleError(error: any) {
    let errMsg = error.message || 'Internal Server error';
    console.log(errMsg); // log to console instead
    // TODO: we should log serilog as well
    return Observable.throw(errMsg);
 }
  
}
