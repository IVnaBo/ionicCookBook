import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];
  pageNum :number = 0; // 初始页码

  loadMore:boolean = false; // 是否是加载更多..
//  显示加载动画
  spinner1: boolean = true;


  constructor(public appService: AppService,
              public navCtrl: NavController) {

    this.getSlidersData();

    this.getCookData();
  }

  /***
   * 获取轮播图接口
   */
  getSlidersData(){
    let params = {
      TopicID:"2\#3\#7",
      method:"GetTopicLikeByTopicID"
    };
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      console.log(rs);
      this.slides = rs;
    });

  }
  //获取菜谱数据
  getCookData(){

    let params = {
      pagesize:"22",
      pageindex:this.pageNum,
      method:'recommend'
    };

    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs =>{
      if(this.loadMore){
        // // this.categories = rs.contact(this.categories);
        // let cookData = rs;
        rs.forEach(val=>{// 拼接数据
          this.categories.push(val);
        });


      }else{ // 直接赋值数据
        this.categories = rs;
      }

      this.spinner1 = false; // 隐藏加载动画...
    });


  }

  /***
   * 加载更多数据
   * @param infiniteScroll 加载器
   */
  doInfinite(infiniteScroll){
    this.pageNum ++ ; // 页码加1
    this.loadMore = true;
    this.getCookData();
    infiniteScroll.complete(); //更新加载更多状态...

  }



  //商品详情
  goDetails(item) {
    /***
     * 跳转并向下传递数据...
     */
    // console.log(item.PictUrl);
    // console.log(item);
    //TopicDescription
    this.navCtrl.push("CookDetailPage",{des:item});
    // this.navCtrl.push("CookDetailPage",{type:item});

  }

  /****
   * 跳转到列表页
   * @param c 列表页需要传递参数
   */
  goProductList(c){
    this.navCtrl.push('ProductListPage', { item: c });
  }



}

