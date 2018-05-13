import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, Platform } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';


@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {
  currentSSD: string;
  networks: Array<HotspotNetwork>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private hotspot: Hotspot,
    private platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
    if (this.platform.is('cordova')) {
      // You're on a device, call the native plugins. Example: 
      console.log('You are on a device, call the native plugins.');
    } else {
      console.log('You are testing in browser');
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      //
      // var url: string = 'assets/mock-images/image.jpg';
    }
    //this.scanWifi();
    //console.log(cordova);
    //this.showAlert('Before check ssd', 'we are working');
    //this.getSsidName();
  }

  showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
  errorHandler(err: any) {
    alert(`Problem: ${err}`);
  }

  scanWifi() {
    alert('start wifi scanning');
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
      console.log(networks);
      this.networks= networks;
    });
  }


}
