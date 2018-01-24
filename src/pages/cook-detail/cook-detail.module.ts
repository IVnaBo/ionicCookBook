import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookDetailPage } from './cook-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CookDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CookDetailPage),ComponentsModule
  ],
})
export class CookDetailPageModule {}
