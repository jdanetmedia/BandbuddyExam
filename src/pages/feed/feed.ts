import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COMMENT_LIST } from "../../mocks/comments/comments";
import { Comment } from "../../models/comments/comment.interface";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { Post } from "../../models/post/post.interface";
import {Subscription} from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  commentsList: Comment[] = COMMENT_LIST;
  postList: any[];
  subscription: Subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private data: AngularFireDatabase) {
    this.subscription = this.data.list<Post[]>('/posts/').valueChanges().map( (arr) => { return arr.reverse(); } ).subscribe(posts => {
      this.postList = posts;
    });
  }

  ionViewDidLoad() {
    console.log(this.commentsList);
  }

  ionViewWillLeave() {
    console.log('Leaving feedpage');
    this.subscription.unsubscribe();
  }

  goToCreatePost() {
    this.navCtrl.push('CreatePostPage');
  }

  goToEditPost() {
    this.navCtrl.push('EditPostPage');
  }

}
