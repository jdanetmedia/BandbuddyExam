import { Component } from '@angular/core';
import { Post } from "../../models/post/post.interface";
import { User } from "firebase";
import { DataService } from "../../providers/data/data.service";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../../providers/auth/auth.service";
import { NavController, ToastController } from "ionic-angular";
import { Profile } from "../../models/profile/profile.interface";

@Component({
  selector: 'app-create-post-form',
  templateUrl: 'create-post-form.component.html'
})
export class CreatePostFormComponent {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  post = {} as Post;
  profile = {} as Profile;

  constructor(private data: DataService,
              private auth: AuthService,
              private toast: ToastController,
              private navCtrl: NavController) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
      this.data.getProfile(user).subscribe(profile => {
        if(profile) {
          this.profile = profile;
        }
      });
    });
  }

  async createPost() {
    if (this.authenticatedUser) {
      this.post.date = new Date();
      this.post.author = this.profile.userName;

      const result = await this.data.createPost(this.post);
      this.navCtrl.setRoot('FeedPage');
      this.toast.create({message: 'Du har oprettet en post.', duration: 3000}).present();

    }
  }

}
