import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryDetailPage } from './category-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CategoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryDetailPage),ComponentsModule
  ],
})
export class CategoryDetailPageModule {}
