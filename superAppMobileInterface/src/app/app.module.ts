import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule {}
