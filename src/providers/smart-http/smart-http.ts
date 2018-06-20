import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    private _url:string ='https://mqtt-heroku.herokuapp.com';
    //private _url: string = 'http://localhost:3000';
    private _token: string;
    set token(token: string) {
        this._token = token;
        console.log(`got a new token ${this._token}`);
    }

    constructor(private http: HttpClient) {

    }
    get headers(): HttpHeaders {
        return new HttpHeaders({
            "Authorization": `Bearer ${this._token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
    }
    get<T>(url: string): Observable<T> {
        return this.http.get(`${this._url}${url}`, { headers: this.headers })
            .map((r: T) => r)
            .catch(this.handleError);
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.http.post(`${this._url}${url}`, data, { headers: this.headers })
            .map((r: T) => r)
            .catch(this.handleError);
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.http.put(`${this._url}${url}`, data, { headers: this.headers })
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
