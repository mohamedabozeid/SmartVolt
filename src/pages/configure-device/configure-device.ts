import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Device, DeviceConfiguration } from '../../models/device.models';
import { DevicesServiceProvider } from '../../providers/devices-service/devices-service';
import { AlertController } from 'ionic-angular';
import { DevicesListPage } from '../devices-list/devices-list';


@Component({
  selector: 'configure-device',
  templateUrl: 'configure-device.html',
})
export class ConfigureDevicePage {

  isBusy: boolean = false;
  device: Device;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: DevicesServiceProvider,
    private alertCtrl: AlertController
  ) {
    this.device = navParams.data;
    if (this.device && !this.device.config) this.device.config = new DeviceConfiguration();
  }

  ionViewDidLoad() {
  }

  save() {
    this.isBusy = true;
    console.log(this.device);
    this.service.saveDevice(this.device).subscribe(data => {
      this.isBusy = false;
      this.navCtrl.setRoot(DevicesListPage);
    }, error => {
      this.showAlert();
      this.isBusy = false;
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Ops, an error happened.',
      buttons: ['OK']
    });
    alert.present();
  }

}
