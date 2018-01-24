import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";

/**
 * Generated class for the CategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage {
  cataID:string;///分类id
  pageNum :number = 0; // 初始页码
  loadMore:boolean = false; // 是否是加载更多..
//  显示加载动画
  spinner1: boolean = true;
  categories: Array<any> = [];
  title:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appService: AppService) {
    this.cataID =  navParams.get("cataID");
    this.title = navParams.get("CatalogName");
    this.pageNum =  0 ;

    this.httpRequest();
  }

  /***
   * 网络请求
   */
  httpRequest(){

    let params = {
      cataID : this.cataID,
      method : "booklist",
      pageIndex:this.pageNum,
      pageSize:"24",
      state:"0",
      order:"0"
    };
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      this.spinner1 = true;
      if(this.loadMore){
        // console.log(rs);

        let cookData = rs.Booklist;
        cookData.forEach(val=>{// 拼接数据
          this.categories.push(val);
        });

      }else{ // 直接赋值数据
        // this.categories = rs;
        let rsArr = rs.Booklist;
        this.categories = rsArr;

        // console.log();
      }
      this.spinner1 = false;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDetailPage');
  }
  /***
   * 加载更多数据
   * @param infiniteScroll 加载器
   */
  doInfinite(infiniteScroll){
    this.pageNum ++ ; // 页码加1
    this.loadMore = true;
    this.httpRequest();
    infiniteScroll.complete(); //更新加载更多状态...

  }

}
