import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from "../../models/post/post.interface";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

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
  postsRef: AngularFireList<any>;
  posts: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public database: AngularFireDatabase) {
    this.postsRef = this.database.list('posts');
    this.posts = this.postsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPostPage');
  }

  ionViewWillLoad() {
    this.post = this.navParams.get('post');
    console.log(this.post);
  }

  editPost(key: string, updateContent: string) {
    this.postsRef.update(key, { postContent: updateContent });
  }

}
