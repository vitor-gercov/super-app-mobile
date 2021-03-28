import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpacexPage } from './spacex';

@NgModule({
  declarations: [
    SpacexPage,
  ],
  imports: [
    IonicPageModule.forChild(SpacexPage),
  ],
})
export class SpacexPageModule {}
