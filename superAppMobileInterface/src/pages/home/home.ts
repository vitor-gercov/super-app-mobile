import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { IonicPage } from "ionic-angular";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(private router: Router) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  navigateTo(route) {
    this.router.navigate([route]);
  }
}
