import { Injectable } from '@angular/core';
import { SmartHttpProvider } from '../smart-http/smart-http';
import { Observable } from 'rxjs/Observable';
import { Device } from '../../models/device.models';


@Injectable()
export class DevicesServiceProvider {

  constructor(private http: SmartHttpProvider) { }

  verify(deviceId: string): Observable<any> {
    return this.http.post('/devices/verify', { deviceId: deviceId });
  }

  saveDevice(device: Device): Observable<any> {
    return this.http.post('/devices/save', device);
  }

  getMyDevices():Observable<Device[]>{
    return this.http.get<Device[]>('/devices/userDevices');
  }

}
