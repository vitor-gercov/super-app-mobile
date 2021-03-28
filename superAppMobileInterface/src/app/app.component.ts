<<<<<<< HEAD
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar, StatusBarOriginal } from "@ionic-native/status-bar";
import {
  SplashScreen,
  SplashScreenOriginal,
} from "@ionic-native/splash-screen";
=======
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnimesPage } from '../pages/animes/animes';
import { GamesPage } from '../pages/games/games';
import { SpacexPage } from '../pages/spacex/spacex';
import { MusicPage } from '../pages/music/music';
>>>>>>> 5a5248a731ff2a6ede43ccdf826ddce40901c138

@Component({
  templateUrl: "app.html",
})
export class MyApp {
<<<<<<< HEAD
  constructor(
    public platform: Platform,
    public statusBar: StatusBarOriginal,
    public splashScreen: SplashScreenOriginal
  ) {
    this.initializeApp();
=======
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GamesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Animes', component: AnimesPage },
      { title: 'Games', component: GamesPage },
      { title: 'SpaceX', component: SpacexPage },
      { title: 'Músicas', component: MusicPage }
    ];
>>>>>>> 5a5248a731ff2a6ede43ccdf826ddce40901c138
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
<<<<<<< HEAD
=======

  openPage(page) {
    this.nav.setRoot(page.component);
  }
>>>>>>> 5a5248a731ff2a6ede43ccdf826ddce40901c138
}
