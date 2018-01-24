import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookWebPage } from './cook-web';

@NgModule({
  declarations: [
    CookWebPage,
  ],
  imports: [
    IonicPageModule.forChild(CookWebPage),
  ],
})
export class CookWebPageModule {}
