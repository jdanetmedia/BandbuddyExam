import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { Post } from "../../models/post/post.interface";
import { DataService } from "../../providers/data/data.service";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})

export class FeedPage {

  postList: Observable<Post[]>;

  constructor(public navCtrl: NavController, private data: DataService) {
    this.postList = this.data
      .getPostList() //DB list
      .snapshotChanges() // Key and values
      .map( changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }).map( (arr) => {
        return arr.reverse();
      });
  }


  ionViewDidLoad() {

  }

  goToCreatePost() {
    this.navCtrl.push('CreatePostPage');
  }


}
