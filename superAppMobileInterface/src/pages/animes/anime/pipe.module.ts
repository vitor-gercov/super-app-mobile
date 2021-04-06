import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FnPipe } from "../../pokemon/fn.pipe";

import { SafePipe } from "./safe.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [SafePipe, FnPipe],
  exports: [SafePipe, FnPipe],
})
export class PipeModule {}
