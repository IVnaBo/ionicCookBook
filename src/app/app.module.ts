import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {AppService} from "./app.service";
import {ComponentsModule} from "../components/components.module";
import {AppShare} from "./app.share";
import {QQSDK} from '@ionic-native/qqsdk';
import {IonicStorageModule} from "@ionic/storage";
import {ImagePicker} from "@ionic-native/image-picker";
import {CategoryPage} from "../pages/category/category";

import {WelcomePageModule} from "../pages/welcome/welcome.module";
import {SelectionPageModule} from "../pages/selection/selection.module";
import { HelperProvider } from '../providers/helper/helper';
import {JPush} from "../../plugins/jpush-phonegap-plugin/ionic/jpush/index";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicStorageModule.forRoot(),WelcomePageModule,SelectionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CategoryPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    AppShare,
    QQSDK,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,JPush
  ]
})
export class AppModule {}
