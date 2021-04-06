import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PipeModule } from "../animes/anime/pipe.module";
import { PokemonPage } from "./pokemon";
import { PokemonsRoutingModule } from "./pokemon.routing";
import { PokemonDataPageModule } from "./pokemon-data/pokemon-data.module";

@NgModule({
  declarations: [PokemonPage],
  imports: [
    IonicPageModule.forChild(PokemonPage),
    PokemonDataPageModule,
    PokemonsRoutingModule,
    PipeModule,
  ],
})
export class PokemonPageModule {}
