import { BrowserModule } from "@angular/platform-browser";
import {
  ErrorHandler,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ApplicationModule,
} from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    ApplicationModule,
    IonicModule.forRoot(MyApp),
    AppRoutingModule,
  ],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
