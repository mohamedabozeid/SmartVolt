import { Injectable } from '@angular/core';
import { SmartHttpProvider } from '../smart-http/smart-http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DevicesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DevicesServiceProvider {

  constructor(private http: SmartHttpProvider) { }

  verify(deviceId: string): Observable<any> {
    return this.http.post('/devices/verify', { deviceId: deviceId });
  }

}
