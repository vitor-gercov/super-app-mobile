import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { PokemonDataPage } from "./pokemon-data/pokemon-data";

const routes: Routes = [
  {
    path: "pokemon/:pokemonId",
    component: PokemonDataPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
