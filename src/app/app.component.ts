import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { FIREBASE_CONFIG } from "./app.firebase.config";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      firebase.initializeApp(FIREBASE_CONFIG);

      const unsubscribe = firebase.auth().onAuthStateChanged(user => { if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe(); }else{
        this.rootPage = 'TabsPage';
        unsubscribe(); }
      });
    });
  }
}

