import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevicesServiceProvider } from '../../providers/devices-service/devices-service';



@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {
  deviceId: string;
  constructor(
    public navCtrl: NavController,
    private devicesService: DevicesServiceProvider
  ) { }

  verify() {
    this.devicesService.verify(this.deviceId)
      .subscribe(data => console.log(data));
  }



}
