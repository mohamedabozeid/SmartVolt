import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {LoginModel} from '../../models/auth.models';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signupPage: any = SignupPage;
  private model: LoginModel = new LoginModel();
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private authService: AuthServiceProvider
  ) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  onSubmit(){
    this.authService.login(this.model).subscribe(data=> console.log(data));
  }

}
