import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AnimesPage } from "../pages/animes/animes";
import { GamesPage } from "../pages/games/games";
import { HomePage } from "../pages/home/home";
import { NasaPage } from "../pages/nasa/nasa";
import { PokemonPage } from "../pages/pokemon/pokemon";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "animes",
    component: AnimesPage,
  },
  {
    path: "games",
    component: GamesPage,
  },
  {
    path: "pokemon",
    component: PokemonPage,
  },
  {
    path: "nasa",
    component: NasaPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
