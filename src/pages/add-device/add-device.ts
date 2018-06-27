import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevicesServiceProvider } from '../../providers/devices-service/devices-service';
import { AlertController } from 'ionic-angular';
import { ConfigureDevicePage } from '../configure-device/configure-device';



@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {
  deviceId: string;
  isBusy: boolean = false;

  constructor(
    public navCtrl: NavController,
    private devicesService: DevicesServiceProvider,
    public alertCtrl: AlertController
  ) { }

  verify() {
    this.isBusy = true;
    this.devicesService.verify(this.deviceId)
      .subscribe(data => {
        this.isBusy = false;
        this.navCtrl.push(ConfigureDevicePage, data);
      }, error => {
        this.isBusy = false;
        this.showAlert();
      });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Verify',
      subTitle: 'Could not verify this device. ',
      buttons: ['OK']
    });
    alert.present();
  }



}
