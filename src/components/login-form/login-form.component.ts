import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";
import { AuthService } from "../../providers/auth/auth.service";

import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController,
              private auth: AuthService) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login() {
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

}
