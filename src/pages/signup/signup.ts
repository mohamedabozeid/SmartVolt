import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  model: {} = {};
  constructor(public navCtrl: NavController) {
  }

  onSubmit(){
    this.navCtrl.pop();
  }
  
}
