import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1root: string;
  tab2root: string;
  tab3root: string;
  tab4root: string;

  constructor() {

    this.tab1root = 'FeedPage';
    this.tab2root = 'EditProfilePage';
    this.tab3root = 'ArchivePage';
    this.tab4root = 'ProfilePage';

  }

}
