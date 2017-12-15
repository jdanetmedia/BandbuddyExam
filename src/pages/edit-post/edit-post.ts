import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from "../../models/post/post.interface";
import { DataService } from "../../providers/data/data.service";

/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {

  post = {} as Post;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

  ionViewWillLoad() {
    this.post = this.navParams.get('post');
  }

  async editPost() {
    //if (this.authenticatedUser) {
      //this.post.author = this.profile.name;
      //this.post.avatar = this.profile.avatar ? this.profile.avatar : '../../assets/imgs/profile-placeholder.png';
      this.post.date = new Date().toDateString();
      const result = await this.data.editPost(this.post);
      console.log(result);
      this.post.postContent = '';
      this.navCtrl.pop();
    }
  //}

}
