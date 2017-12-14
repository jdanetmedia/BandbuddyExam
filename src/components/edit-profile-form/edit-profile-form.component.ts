import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { User } from 'firebase/app';
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";

import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from "../../providers/auth/auth.service";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;

  constructor(private data: DataService,
              private auth: AuthService,
              private navCtrl: NavController,
              private toast: ToastController) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
      this.data.getProfile(user).subscribe(profile => {
        if(profile) {
          this.profile = profile;
        }
      });
    });
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.navCtrl.setRoot('FeedPage');
      this.toast.create({message: 'Profilinfo for ' + this.profile.userName + ' er opdateret.', duration: 3000}).present();
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }



}
