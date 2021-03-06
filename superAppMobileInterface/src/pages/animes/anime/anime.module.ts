import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AnimePage } from "./anime";
import { PipeModule } from "./pipe.module";
import { SafePipe } from "./safe.pipe";

@NgModule({
  declarations: [AnimePage],
  imports: [IonicPageModule.forChild(AnimePage), PipeModule],
})
export class AnimePageModule {}
