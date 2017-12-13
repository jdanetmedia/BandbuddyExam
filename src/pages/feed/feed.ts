import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COMMENT_LIST } from "../../mocks/comments/comments";
import { Comment } from "../../models/comments/comment.interface";
import { Profile } from "../../models/profile/profile.interface";
import { Post } from "../../models/post/post.interface";
import { Observable } from "rxjs/Observable";
import {DataService} from "../../providers/data/data.service";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  postList$: Observable<Post[]>;

  commentsList: Comment[] = COMMENT_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataService) {
    this.postList$ = this.data.getPosts(); //DB list
  }


  ionViewDidLoad() {
    console.log(this.commentsList);
  }

  goToCreatePost() {
    this.navCtrl.push('CreatePostPage');
  }


}
