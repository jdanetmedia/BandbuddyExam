import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";
import { DataService } from "../../providers/data/data.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tabBarElement;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private toast: ToastController,
              private data: DataService) {
    this.tabBarElement = document.querySelector("ion-tabbar");
  }

  onViewWillEnter()
  {
    this.tabBarElement.style.display = 'none';
  }

  onViewWillLeave()
  {
    this.tabBarElement.style.display = 'block';
  }

  login(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Du er nu logget ind med ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('TabsPage');
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
