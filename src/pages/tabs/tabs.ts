import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CategoryPage} from "../category/category";
import {SelectionPage} from "../selection/selection";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SelectionPage;
  tab4Root = AboutPage;
  tab3Root = CategoryPage;


  constructor() {

  }

}
