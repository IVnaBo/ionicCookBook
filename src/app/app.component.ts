import {Component, ViewChild} from '@angular/core';
import {Platform, Events, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../pages/welcome/welcome";
import {AboutPage} from "../pages/about/about";
import {HelperProvider} from "../providers/helper/helper";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  rootPage:any = TabsPage;
  // isFirstLoad :boolean = true;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public storage: Storage,
              private events:Events,
              private helper:HelperProvider) {

  this.storage.get("firstLoad").then(val=>{
    console.log(val);
      if(val){ // 第一次运行的时候 肯定是false....
        this.rootPage = TabsPage;
      }else {
        this.storage.set('firstLoad', true);
        this.rootPage = WelcomePage;
      }
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.helper.initJpush();//初始化极光推送
      this.jpushOpenNotification();//处理打开推送消息事件

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  jpushOpenNotification() {
    //当点击极光推送消息跳转到指定页面
    this.events.subscribe('jpush.openNotification', content => {
      let tabs = this.nav.getActiveChildNav();
      let tab = tabs.getSelected();
      let activeVC = tab.getActive(); /// 获取显示中的控制器
      // if (activeVC.component == AboutPage) {//如果当前所在页面就是将要跳转到的页面则不处理
      //   return;
      // }
      let activeNav = activeVC.getNav();
      activeNav.popToRoot({}).then(() => {//导航跳到最顶层
        tabs.select(3);//选中第四个tab
        let tab = tabs.getSelected();//获取选中的tab
        let activeVC = tab.getActive();//通过当前选中的tab获取ViewController
        let activeNav = activeVC.getNav();//通过当前视图的ViewController获取的NavController
        activeNav.push(AboutPage);//跳转到指定页面
      });
    });
  }
}
