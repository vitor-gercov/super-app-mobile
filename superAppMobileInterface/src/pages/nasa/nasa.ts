import {  Component, OnInit } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { BehaviorSubject } from "rxjs";

@IonicPage()
@Component({
  selector: "page-nasa",
  templateUrl: "nasa.html",
})
export class NasaPage implements OnInit {
  animeList = new BehaviorSubject<any>({});

  constructor() {}

  async ngOnInit() {
  }

  async ionViewDidLoad() {
    console.log("NASA PAGE")
  }
}
