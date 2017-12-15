import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandsPage } from './bands';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    BandsPage,
  ],
  imports: [
    IonicPageModule.forChild(BandsPage),
    ComponentsModule
  ],
})
export class BandsPageModule {}
