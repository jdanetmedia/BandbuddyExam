import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth/auth.service";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    console.log();
  }

  logOut() {
    this.auth.logOut().then(() => {
      console.log('Trying login');
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
