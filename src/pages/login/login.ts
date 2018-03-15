import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signupPage: any = SignupPage;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

}
