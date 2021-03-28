import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

<<<<<<< HEAD
import { MyApp } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
=======
import { MyApp } from './app.component';
import { AnimesPage } from '../pages/animes/animes';
import { GamesPage } from '../pages/games/games';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexPage } from '../pages/spacex/spacex';
import { MusicPage } from '../pages/music/music';

@NgModule({
  declarations: [
    MyApp,
    AnimesPage,
    GamesPage,
    SpacexPage,
    MusicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnimesPage,
    GamesPage,
    SpacexPage,
    MusicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
>>>>>>> 5a5248a731ff2a6ede43ccdf826ddce40901c138
})
export class AppModule {}
