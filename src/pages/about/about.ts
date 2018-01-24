import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ImagePicker} from "@ionic-native/image-picker";
declare var LocationPlugin;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  listArr:Array<any>;
  isLogin:boolean; ///是否登录
  imgUrl:string ;
  constructor(public navCtrl: NavController,private storage:Storage,private imagePicker: ImagePicker) {
    console.log("about页面被加载");
    this.listArr = ['阅读屏幕常亮','朗读自动翻篇','仅在wifi网络在线阅读(播放)','仅wifi网络缓存(下载)','更新消息通知'];

  }
  ionViewWillEnter(){
    // console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
    // this.storage.get('userInfo').then((val) => {
    //   console.log("登录信息:" + val);
    //   if(val != null){ // 取值不为空 再进行下一步动作....
    //     if(val.userName != '' && val.userName != null){
    //       this.isLogin = true;
    //       console.log("1111111111111111111");
    //     }
    //   }else{
    //     this.isLogin = false;
    //   }
    //
    // });
    // console.log("登录状态:" + this.isLogin);
  }

  /***
   * 跳转到设置
   */
  toSettingPage(){
    this.navCtrl.push("SettingPage");
}

  listItemClick(index){

  }
  /***
   * 登录按钮点击
   */
  loginBtnAction(){
   this.navCtrl.push("LoginPage");
  }
  takePhoto(event){
    console.log(event.target.src);
    let options = {
      maximumImagesCount:1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        event.target.src = results[i];
      }
    }, (err) => {
      alert(err);
    });
  }

  /***
   * 图表页
   */
  toChartsPage(){
    this.navCtrl.push("ChartsPage");
  }

  getLocation(){
    LocationPlugin.getLocation(data => {
      alert(JSON.stringify(data))
    }, msg => {
      alert(JSON.stringify(msg))
    });
  }

}
