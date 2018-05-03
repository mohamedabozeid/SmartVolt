import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

declare let cordova: any;

@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
    console.log(cordova);
  }

}
