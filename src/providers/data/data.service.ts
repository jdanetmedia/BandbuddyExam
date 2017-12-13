import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import 'rxjs/add/operator/take';
import { Observable } from "rxjs/Observable";
import { Post } from "../../models/post/post.interface";

@Injectable()
export class DataService {

  private postsRef = this.database.list<Post>('posts').snapshotChanges() // Key and values
    .map( changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });


  constructor(private database: AngularFireDatabase) {

  }

  getProfile(user: User): Observable<Profile> {
    return this.database.object(`/profiles/${user.uid}`).valueChanges();
  }


  saveProfile(user: User, profile: Profile) {
    const itemRef = this.database.object(`/profiles/${user.uid}`);
    itemRef.update(profile).then(() => {
      console.log(profile);
    });
  }

  createPost(post: Post) {
    const itemRef = this.database.list('posts');
    itemRef.push(post).then(() => {
      console.log(post);
    });
  }

  getPosts() {
    return this.postsRef;
  }

}
