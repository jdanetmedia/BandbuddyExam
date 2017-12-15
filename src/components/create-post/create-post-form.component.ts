import {Component, ElementRef, ViewChild} from '@angular/core';
import { Post } from "../../models/post/post.interface";
import { User } from "firebase";
import { DataService } from "../../providers/data/data.service";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../../providers/auth/auth.service";
import { NavController } from "ionic-angular";
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
      this.post.author = this.profile.name;
      this.post.avatar = this.profile.avatar ? this.profile.avatar : '../../assets/imgs/profile-placeholder.png';
      this.post.date = new Date().toDateString();
      this.post.id = Date();
      const result = await this.data.createPost(this.post);
      console.log(result);
      this.post.postContent = '';
      this.navCtrl.pop();
    }
  }

}
