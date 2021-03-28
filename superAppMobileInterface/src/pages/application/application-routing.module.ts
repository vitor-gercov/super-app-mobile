import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "animes",
    loadChildren: () =>
      import("../animes/animes.module").then((m) => m.AnimesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
