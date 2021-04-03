import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AnimePage } from "./anime";
import { SafePipe } from "./safe.pipe";

@NgModule({
  imports: [CommonModule],  
  declarations: [SafePipe],
  exports: [SafePipe]
})
export class PipeModule {}