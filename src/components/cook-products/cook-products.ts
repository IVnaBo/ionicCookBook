import {Component, Input} from '@angular/core';
import {AppService, AppGlobal} from "../../app/app.service";
import {NavController} from "ionic-angular";

/**
 * Generated class for the CookProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
//组件
@Component({
  selector: 'cook-products',
  templateUrl: 'cook-products.html'
})
export class CookProductsComponent {

  text: string;
  @Input() categories:Array<any>;
  constructor(public appService: AppService,
              public navCtrl: NavController) {
    console.log('Hello CookProductsComponent Component');
    this.text = 'Hello World';
  }

  cookStep(item){
    console.log(item);
    let bookId = item.BookID;
    let cookName = item.BookName;
    let shareImg = item.BookIconOtherURL;
    //http://www2.uuumeng.com:9090/caipu/ComicHandle.ashx?sectionname=750x1334&method=picturelistbybookid&bookid=4

    let params = {
      sectionname:"750x1334",
      method:"picturelistbybookid",
      bookid:bookId
    };
    this.appService.httpGet(AppGlobal.API.GetTopicUrl,params,rs=>{
      console.log(rs);
      let cookStepUrl = rs[0]["PictureURL"];
      let link = rs[0]["PictureRefererURL"];
      if(cookStepUrl){
        this.navCtrl.push("CookWebPage",{url:cookStepUrl,cookName:cookName,link:link,img:shareImg});
        // console.info(cookStepUrl);
      }
    });


  }

}
