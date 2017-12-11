import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Konto opretet med ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.pop();
    }
    else {
      this.toast.create({
        message: `Konto kunne ikke oprettes: ${event.error.message}`,
        duration: 3000
      }).present();
      console.log(event.error.message);
    }
  }

}
