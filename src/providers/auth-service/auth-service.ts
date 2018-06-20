import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/auth.models';
import { SmartHttpProvider } from '../smart-http/smart-http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private _user: any;
  get isAuthenticated() {
    if (this._user && this._user._id) return true;
    return false;
  }

  constructor(private http: SmartHttpProvider) { }

  login(loginModel: LoginModel): Observable<boolean> {
    return this.http.post<any>('/auth/login', loginModel)
      .map(result => {
        if (result.status == "OK") {
          this._user = result.user;
          this.http.token = result.token;
          return true;
        }
        return false;
      })
  }

}
