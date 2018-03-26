import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  private _user: any;
  get isAuthenticated(){
     if(this._user && this._user.userId) return true;
     return false;
  }

  constructor() {}
  
  login(username: string, password: string){
    
  }

}
