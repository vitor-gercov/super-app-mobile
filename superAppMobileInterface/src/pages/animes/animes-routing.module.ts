import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimesPage } from "./animes";

const routes: Routes = [
  {
    path: "",
    component: AnimesPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AnimesRoutingModule {}
