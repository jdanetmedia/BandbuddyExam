import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { User } from 'firebase/app';
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { storage } from 'firebase';

import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from "../../providers/auth/auth.service";
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;
  subscription: Subscription;

  constructor(private data: DataService,
              private auth: AuthService,
              private navCtrl: NavController,
              private toast: ToastController,
              private camera: Camera) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().take(1).subscribe((user: User) => {
      this.authenticatedUser = user;
      this.subscription = this.data.getProfile(user).take(1).subscribe(profile => {
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

  async takePhoto() {
    try {
      // Camera options
      const options: CameraOptions = {
        targetWidth: 600,
        targetHeight: 600,
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        cameraDirection: 1
      }
      const result = await this.camera.getPicture(options);

      const image = `data:image/jpeg;base64,${result}`;

      // const pictures = storage().ref('pictures/profilbillede');
      const pictures = storage().ref(`/profilbilleder/profil-${this.authenticatedUser.uid}`);
      pictures.putString(image, 'data_url');
      this.profile.avatar = image;
    }
    catch(e) {
      console.error(e);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }



}
