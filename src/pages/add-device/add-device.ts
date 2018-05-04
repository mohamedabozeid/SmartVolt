import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

declare var WifiWizard: any;

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
    //console.log(cordova);
    this.showAlert('Before check ssd', 'we are working');
    this.getSsidName();
    /* if(cordova){
      cordova.WifiWizard.getCurrentSSID((ssd: string)=>{
        this.showAlert('SSID Found!', `Your SSID is ${ssd}`);
      }, ()=>{});
    }else{
      this.showAlert('cordova is null', 'please check what is wrong');
    } */
    
   // this.showAlert('After check ssd', 'we are done checking');
  }

  showAlert(title: string, subTitle: string){
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

  getSsidName() {
    WifiWizard.getCurrentSSID((ssid: string) => alert(`Your SSID: ${ssid}`), this.errorHandler);
  }

  isWifiEnabled() {
    WifiWizard.isWifiEnabled(truthy => alert(`Wifi Enabled: ${truthy}`), this.errorHandler);
  }

  listNetworks() {
    WifiWizard.listNetworks(networks => alert(`Networks: ${networks}`), this.errorHandler);
  }

}
