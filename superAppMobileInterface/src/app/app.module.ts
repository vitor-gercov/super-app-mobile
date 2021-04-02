import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { HttpClientModule } from "@angular/common/http";
import { GameService } from "../services/game.service";

import { MyApp } from "./app.component";
import { GamesPage } from "../pages/games/games";
import { AnimesPage } from "../pages/animes/animes";
import { SpacexPage } from "../pages/spacex/spacex";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AnimeService } from "../services/anime.service";

import { HomePage } from "../pages/home/home";
import { HomePageModule } from "../pages/home/home.module";
import { AnimesPageModule } from "../pages/animes/animes.module";
import { SpacexPageModule } from "../pages/spacex/spacex.module";
import { GamesPageModule } from "../pages/games/games.module";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AppRoutingModule,
    HomePageModule,
    AnimesPageModule,
    SpacexPageModule,
    GamesPageModule,
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
  ],
})
export class AppModule {}
