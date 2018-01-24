import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import {AppShare} from "../../app/app.share";

/**
 * Generated class for the CookWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cook-web',
  templateUrl: 'cook-web.html',
})
export class CookWebPage {
  trustedUrl:any;
  cookName : string;
  link :string;
  shareImg:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              private  appShare:AppShare) {
    //this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('url'));
    this.trustedUrl = this.navParams.get("url");
    this.cookName = this.navParams.get("cookName");
    this.shareImg = this.navParams.get("img");
    this.link = this.navParams.get("link");

    //cookName:cookName,link:link,img:shareImg
    // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('url'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookWebPage');
  }
  shareAction(index){
    // console.log("按钮点击........");

   // console.log(index);
    console.log("连接为:" + this.link);
    console.log("图片地址为:" + this.shareImg);
    let shareDes = "看一下这个" + this.cookName + "怎么做的...";
    if(index == 1){
      //scene,link,title,des,img

      this.appShare.qqShare(0,this.link,this.cookName,shareDes, this.shareImg);
    }else {
      this.appShare.wxShare(0,this.cookName, shareDes,this.shareImg,this.link);
    }

  }

}
