import { Component, ViewChild } from "@angular/core";
import { IonicPage, Nav, NavController, NavParams } from "ionic-angular";
import { AnimesPage } from "../animes/animes";
import { GamesPage } from "../games/games";
import { SpacexPage } from "../spacex/spacex";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  gamePage = GamesPage;
  animePage = AnimesPage;
  spacex = SpacexPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  openPage(page) {
    this.navCtrl.setRoot(page);
  }
}
