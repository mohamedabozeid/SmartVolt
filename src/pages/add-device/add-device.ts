import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

declare let cordova: any;

@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {
  currentSSD: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
    console.log(cordova);
    cordova.WifiWizard.getCurrentSSID((ssd: string)=>{
      let alert = this.alertCtrl.create({
        title: 'SSID Found!',
        subTitle: `Your SSID is ${ssd}`,
        buttons: ['OK']
      });
      alert.present();
    }, ()=>{

    });
  }

}
