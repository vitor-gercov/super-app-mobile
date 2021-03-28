import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar, StatusBarOriginal } from "@ionic-native/status-bar";
import {
  SplashScreen,
  SplashScreenOriginal,
} from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  constructor(
    public platform: Platform,
    public statusBar: StatusBarOriginal,
    public splashScreen: SplashScreenOriginal
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
