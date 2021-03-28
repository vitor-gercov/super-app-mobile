import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplicationPage } from "./application";
import { ApplicationRoutingModule } from "./application-routing.module";

@NgModule({
  declarations: [ApplicationPage],
  imports: [CommonModule, ApplicationRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  providers: [],
})
export class ApplicationModule {}
