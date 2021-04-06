import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { HttpClientModule } from "@angular/common/http";
import { GameService } from "../services/game.service";

import { MyApp } from "./app.component";
import { GamesPage } from "../pages/games/games";
import { AnimesPage } from "../pages/animes/animes";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AnimeService } from "../services/anime.service";

import { HomePage } from "../pages/home/home";
import { HomePageModule } from "../pages/home/home.module";
import { AnimesPageModule } from "../pages/animes/animes.module";
import { PokemonPageModule } from "../pages/pokemon/pokemon.module";
import { GamesPageModule } from "../pages/games/games.module";
import { NasaPageModule } from "../pages/nasa/nasa.module";
import { NasaService } from "../services/nasa.service";
import { PokemonService } from "../services/pokemon.service";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AppRoutingModule,
    HomePageModule,
    AnimesPageModule,
    PokemonPageModule,
    GamesPageModule,
    NasaPageModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GameService,
    AnimeService,
    NasaService,
    PokemonService,
  ],
})
export class AppModule {}
