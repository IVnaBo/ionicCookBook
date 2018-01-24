import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  chipData:Array<any> = [];
  categories: Array<any> = [];
  searchTxt :string;
  searchResultShow:boolean = false;/// 搜索结果视图是否显示....
  searchResultList:Array<any> = [];/// 搜素结果数据源

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appService: AppService) {
  }

  /***
   * 麻婆豆腐,果汁果冻,蚂蚁上树,香肠鸡蛋捲饼,芋头烧五花肉,香燜大虾,酸菜鱼,辣子鸡, 水煮牛肉,双皮奶,回锅肉,鱼,汤,鸡,虾,麵包,茄子,豆腐,咸肉,藕,排骨,白菜,羊肉,猪蹄@麻婆豆腐,果汁果冻,蚂蚁上树,香肠鸡蛋卷饼,芋头烧五花肉,香焖大虾,酸菜鱼,辣子鸡, 水煮牛肉,双皮奶,回锅肉,鱼,汤,鸡,虾,面包,茄子,豆腐,咸肉,藕,排骨,白菜,羊肉,猪蹄@麻婆豆腐,果汁果冻,蚂蚁上树,香肠鸡蛋捲饼,芋头烧五花肉,香燜大虾,酸菜鱼,辣子鸡, 水煮牛肉,双皮奶,回锅肉,鱼,汤,鸡,虾,麵包,茄子,豆腐,咸肉,藕,排骨,白菜,羊肉,猪蹄@麻婆豆腐,果汁果冻,蚂蚁上树,香肠鸡蛋捲饼,芋头烧五花肉,香燜大虾,酸菜鱼,辣子鸡, 水煮牛肉,双皮奶,回锅肉,鱼,汤,鸡,虾,麵包,茄子,豆腐,咸肉,藕,排骨,白菜,羊肉,猪蹄
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.chipData = ["麻婆豆腐","果汁果冻","蚂蚁上树","香肠鸡蛋捲饼","芋头烧五花肉","酸菜鱼","辣子鸡","水煮牛肉","双皮奶","回锅肉","鱼","汤","虾","面包","茄子","豆腐","排骨"];
    this.getCategoryData();
  }

  /***
   * 获取分类列表数据
   */
  getCategoryData(){
    let params = {
      method : "catalogs"
    };
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      // console.info(rs);
      this.categories = rs;
    });
  }

  /****
   * 分类列表点击
   * @param item item...
   */
  categoryClick(item){
    // console.log(item["CatalogID"]);
    console.log(item);
    this.navCtrl.push("CategoryDetailPage",{cataID:item["CatalogID"],CatalogName:item["CatalogName"]});
  }

  /****
   * 搜索框内容发生变化...
   * @param ev
   */
  onInput(ev){
    console.log(ev.target.value);
  }

  /***
   * 热门分类chip 点击
   * @param ev 标题
   */
  chipItemClick(ev){
    this.searchTxt = ev;
    console.log(ev);
    this.keyWorldSearch(ev);
  }

  /***
   * 关键字搜索
   * @param key 关键字
   */
  keyWorldSearch(key){
    let params = {
      key:key,
      method:"getkey"
    }
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      this.searchResultShow = true;
      this.searchResultList = rs;
      // console.info(rs);
    });
  }

}
