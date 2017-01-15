import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { AboutPage } from './../pages/about/about';

export interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: PageObj[] = [
    {title: 'Offers', component: HelloIonicPage, icon: 'bulb'},
    {title: 'Yoseikan Card?', component: AboutPage, index: 1, icon: 'information-circle'}
  ];

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
