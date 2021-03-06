import { Component, OnInit } from '@angular/core';
import { DataService } from "../../providers/data/data.service";
import { AuthService } from "../../providers/auth/auth.service";
import { User } from "firebase";
import { Profile } from "../../models/profile/profile.interface";

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;

  ngOnInit(): void {
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user)
    })
  }

  constructor(private data: DataService,
              private auth: AuthService) {

  }

}
