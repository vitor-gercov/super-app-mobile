import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AnimePage } from "./anime/anime";

const routes: Routes = [
  {
    path: "animes/:animeId",
    component: AnimePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimesRoutingModule {}
