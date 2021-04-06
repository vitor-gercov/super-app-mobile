import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { Router } from "@angular/router";
import { AnimeService } from "../services/anime.service";
import { PokemonService } from "../services/pokemon.service";

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
    private animeService: AnimeService,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Animes", route: "animes" },
      { title: "Games", route: "games" },
      { title: "Pokémon", route: "pokemon" },
      { title: "NASA", route: "nasa" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.route !== "animes") {
      this.animeService.pageNumber = 0;
    } else if (page.route !== "pokemon") {
      this.pokemonService.pageNumber = 0;
    }
    this.router.navigate([page.route]);
  }
}
