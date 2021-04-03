import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AnimesPage } from "../pages/animes/animes";
import { GamesPage } from "../pages/games/games";
import { HomePage } from "../pages/home/home";
import { NasaPage } from "../pages/nasa/nasa";
import { SpacexPage } from "../pages/spacex/spacex";

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
    path: "spacex",
    component: SpacexPage,
  },
  {
    path: "nasa",
    component: NasaPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
