import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth/auth.service";
import * as firebase from "firebase";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  }

  logOut() {
    this.auth.logOut();
  }

}
