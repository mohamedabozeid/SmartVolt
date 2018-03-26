import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signupPage: any = SignupPage;
  private model: {username:string, password:string} = {username:'', password:''};
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private authService: AuthServiceProvider
  ) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  onSubmit($event){
    console.log($event);
    this.authService
  }

}
