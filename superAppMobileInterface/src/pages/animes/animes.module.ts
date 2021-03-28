import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimesPage } from "./animes";
import { AnimesRoutingModule } from "./animes-routing.module";

@NgModule({
  declarations: [AnimesPage],
  imports: [CommonModule, AnimesRoutingModule],
  exports: [],
  providers: [],
})
export class AnimesModule {}
