import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import 'rxjs/add/operator/take';
import { Observable } from "rxjs/Observable";
import { Post } from "../../models/post/post.interface";

@Injectable()
export class DataService {

  private postListRef = this.database.list<Post>('posts');

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
    console.log(post);
    const itemRef = this.database.list<Post>('/posts/');
    itemRef.push(post).then(() => {
      console.log(post);
    });
  }

}
