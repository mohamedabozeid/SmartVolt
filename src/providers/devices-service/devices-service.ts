import { Injectable } from '@angular/core';
import { SmartHttpProvider } from '../smart-http/smart-http';
import { Observable } from 'rxjs/Observable';
import { Device, DEVICE_COMMANDS } from '../../models/device.models';


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
  executeCommand(command: DEVICE_COMMANDS, device: Device){
    return this.http.post('/devices/execute', {deviceId: device._id, cmd: command});
  }
}
