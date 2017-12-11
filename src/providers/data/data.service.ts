import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import 'rxjs/add/operator/take';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User): Observable<Profile> {
    return this.database.object(`/profiles/${user.uid}`).valueChanges();
  }

  //  saveProfile(user: User, profile: Profile) {
  //    this.profileObject = this.database.list<Profile>(`/profiles/${user.uid}`).update(user.uid, user)
  //      .then( () => {
  //      console.log('Maybe saved?');
  //    });
  // }

  saveProfile(user: User, profile: Profile) {
    const itemRef = this.database.object(`/profiles/${user.uid}`);
    itemRef.update(profile).then(() => {
      console.log(profile);
    });
  }

}
