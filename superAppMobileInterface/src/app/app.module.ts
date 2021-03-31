import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { HttpClientModule } from '@angular/common/http';
import { GameService } from "../services/game.service";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { GamesPage } from "../pages/games/games";
import { AnimesPage } from "../pages/animes/animes";
import { SpacexPage } from "../pages/spacex/spacex";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [

    MyApp, 
    AnimesPage, 
    GamesPage, 
    SpacexPage,
    HomePage
  ],
  imports: [

    BrowserModule, 
    IonicModule.forRoot(MyApp), 
    HttpClientModule
  ],
  schemas: [

    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [

    IonicApp
  ],
  entryComponents: [

    MyApp,
    AnimesPage,
    GamesPage,
    SpacexPage,
    HomePage,
  ],
  providers: [

    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GameService
  ],
})
export class AppModule {}
