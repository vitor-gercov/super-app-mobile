import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
})
export class HomePageModule {}
