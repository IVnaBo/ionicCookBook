// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JPush} from "../../../plugins/jpush-phonegap-plugin/ionic/jpush/index";
import {Platform, Events} from "ionic-angular";

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  constructor(private jPush: JPush,
              private platform:Platform,
              private events:Events) {
    console.log('Hello HelperProvider Provider');
  }

  /***
   * 是否是真机环境
   * @returns {boolean}
   */
  isMobile():boolean{
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }
  /**
   * 是否ios真机环境
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }
  /**
   * 极光推送
   */
  initJpush() {
    if (!this.isMobile()) {
      return;
    }
    this.jPush.init(); /// 初始化极光推送
    // this.jPush.setDebugMode(IS_DEBUG);
    this.jPushAddEventListener();
  }


  private jPushAddEventListener() {

    this.jPush.getUserNotificationSettings().then(result => { /// 获取用户通知开关
      if (result == 0) {
        console.log('jpush-系统设置中已关闭应用推送');
      } else if (result > 0) {
        console.log('jpush-系统设置中打开了应用推送');
      }
    });
    //点击通知进入应用程序时会触发的事件
    document.addEventListener("jpush.openNotification", event => {
      this.setIosIconBadgeNumber(0);
      let content = this.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.openNotification" + content);
      this.events.publish('jpush.openNotification', content);
    }, false);

    //收到通知时会触发该事件
    document.addEventListener("jpush.receiveNotification", event => {
      let content = this.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.receiveNotification" + content);
    }, false);

    //收到自定义消息时触发这个事件
    document.addEventListener("jpush.receiveMessage", event => {
      let message = this.isIos() ? event['content'] : event['message'];
      console.log("jpush.receiveMessage" + message);
    }, false);

  }

  setAlias() {
    if (!this.isMobile()) {
      return;
    }
    // this.jPush.setAlias({sequence: 1, alias: this.globalData.userId}, (result) => {
    //   console.log('jpush-设置别名成功:');
    //   console.log(result);
    // }, (error) => {
    //   console.log('jpush-设置别名失败:' + error.code);
    // });
  }

  deleteAlias() {
    // if (!this.nativeService.isMobile()) {
    //   return;
    // }
    // this.jPush.deleteAlias({sequence: 2}, (result) => {
    //   console.log('jpush-删除别名成功');
    //   console.log(result);
    // }, (error) => {
    //   console.log('jpush-设删除别名失败:' + error.code);
    // });
  }
  //
  // setTags(tags: Array<string> = []) {
  //   if (!this.nativeService.isMobile()) {
  //     return;
  //   }
  //   if (this.nativeService.isAndroid()) {
  //     tags.push('android');
  //   }
  //   if (this.nativeService.isIos()) {
  //     tags.push('ios');
  //   }
  //   this.jPush.setTags({sequence: 3, tags: tags}, (result) => {
  //     console.log('jpush-设置标签成功');
  //     console.log(result);
  //   }, (error) => {
  //     console.log('jpush-设置标签失败:' + error.code);
  //   })
  // }

  // deleteTags(tags: Array<string> = []) {
  //   if (!this.nativeService.isMobile()) {
  //     return;
  //   }
  //   this.jPush.deleteTags({sequence: 4, tags: tags}, (result) => {
  //     console.log('jpush-删除标签成功');
  //     console.log(result);
  //   }, (error) => {
  //     console.log('jpush-删除标签失败:' + error.code);
  //   })
  // }

  //设置ios应用角标数量
  setIosIconBadgeNumber(badgeNumber) {
    if (this.isIos()) {
      this.jPush.setBadge(badgeNumber);//上传badge值到jPush服务器
      this.jPush.setApplicationIconBadgeNumber(badgeNumber);//设置应用badge值
    }
  }

}
