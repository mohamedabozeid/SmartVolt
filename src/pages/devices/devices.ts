import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {
  }

  ionViewCanEnter() {
    if (!this.authService.isAuthenticated) {
      this.navCtrl.push(LoginPage);
    }
  }

}
