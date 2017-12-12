import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COMMENT_LIST } from "../../mocks/comments/comments";
import { Comment } from "../../models/comments/comment.interface";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  commentsList: Comment[] = COMMENT_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.commentsList);
  }

  goToCreatePost() {
    this.navCtrl.push('CreatePostPage');
  }

}
