import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PipeModule } from "../../animes/anime/pipe.module";
import { PokemonDataPage } from "./pokemon-data";

@NgModule({
  declarations: [PokemonDataPage],
  imports: [IonicPageModule.forChild(PokemonDataPage), PipeModule],
})
export class PokemonDataPageModule {}
