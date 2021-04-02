import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AnimesPage } from "../pages/animes/animes";
import { GamesPage } from "../pages/games/games";
import { SpacexPage } from "../pages/spacex/spacex";
import { HomePage } from "../pages/home/home";
import { Router } from "@angular/router";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; route: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private router: Router
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Animes", route: "animes" },
      { title: "Games", route: "games" },
      { title: "SpaceX", route: "spacex" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.router.navigate([page.route]);
  }
}
