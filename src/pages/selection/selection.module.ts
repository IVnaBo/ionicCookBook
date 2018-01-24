import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectionPage } from './selection';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    SelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectionPage),ComponentsModule
  ],
})
export class SelectionPageModule {}
