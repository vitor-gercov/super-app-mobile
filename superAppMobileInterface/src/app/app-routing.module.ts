import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationPage } from "../pages/application/application";

const routes: Routes = [
  {
    path: "application",
    loadChildren: () =>
      import("../pages/application/application.module").then(
        (m) => m.ApplicationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
