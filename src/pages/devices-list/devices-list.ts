import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { AddDevicePage } from '../add-device/add-device';
import { DevicesServiceProvider } from '../../providers/devices-service/devices-service';
import { Device, DEVICE_COMMANDS } from '../../models/device.models';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices-list.html'
})
export class DevicesListPage {

  devices: Device[] = [];
  private loader: any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private authService: AuthServiceProvider,
    private devicesService: DevicesServiceProvider
  ) {
  }

  ionViewCanEnter() {
    if (!this.authService.isAuthenticated) {
      this.navCtrl.push(LoginPage);
    } else {
      this.loadMyDevices();
    }
  }

  loadMyDevices() {
    this.presentLoading();
    this.devicesService.getMyDevices().subscribe((data: Device[]) => {
      this.devices = data;
      this.loader.dismiss();
    });
  }
  addDevice() {
    this.navCtrl.push(AddDevicePage);
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      //duration: 3000
    });
    this.loader.present();
  }

  toggleDevice(device: Device, value: boolean) {
    //console.log(`deviceId: ${device._id}, Value:${value}`);
    this.devicesService.executeCommand(value ? DEVICE_COMMANDS.ON : DEVICE_COMMANDS.OFF,
       device).subscribe(data=> console.log(data));
  }

}
