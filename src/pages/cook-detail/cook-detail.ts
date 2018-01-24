import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";


/**
 * Generated class for the CookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cook-detail',
  templateUrl: 'cook-detail.html',
})
export class CookDetailPage {
   // detailParams:any;
  topicDes:string = "";
  topicImg:string = "";
  category:Array<any> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appService: AppService
              ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CookDetailPage');
    let type = this.navParams.get("des");//获取传递的数据
    this.topicDes = type["TopicDescription"];
    this.topicImg = type["TopicIconUrl"];


    // console.log(type);
    this.getCookData();
  }

  getCookData(){
    //http://www2.uuumeng.com:9090/caipu/ComicHandle.ashx?name=11813%2323576%23264%233750%23170%2316877%231213%239380&method=search&type=2
    let params = {
      name:"11813%2323576%23264%233750%23170%2316877%231213%239380",
      method:"search",
      type:2
    };
    //
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      // console.log(rs);
      this.category = rs;
    });

  }

}
