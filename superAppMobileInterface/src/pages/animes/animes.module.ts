import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AnimePageModule } from "./anime/anime.module";
import { AnimesPage } from "./animes";
import { AnimesRoutingModule } from "./animes.routing";

@NgModule({
  declarations: [AnimesPage],
  imports: [
    IonicPageModule.forChild(AnimesPage),
    AnimePageModule,
    AnimesRoutingModule,
  ],
})
export class AnimesPageModule {}
