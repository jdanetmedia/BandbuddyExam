import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COMMENT_LIST } from "../../mocks/comments/comments";
import { Comment } from "../../models/comments/comment.interface";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { Post } from "../../models/post/post.interface";
import { ToastController } from "ionic-angular";
import { AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  commentsList: Comment[] = COMMENT_LIST;
  postList: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private data: AngularFireDatabase,
              private auth: AngularFireAuth) {
    this.postList = this.data.list<Post[]>('/posts/').valueChanges().map( (arr) => { return arr.reverse(); } );
  }

  ionViewDidLoad() {
    console.log(this.commentsList);
  }

  goToCreatePost() {
    this.navCtrl.push('CreatePostPage');
  }


}
