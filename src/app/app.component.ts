import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TranslateService} from '@ngx-translate/core';
import { localizations } from './translations';

import { Settings } from './../providers/settings.service';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { AboutPage } from './../pages/about/about';
import { SettingsPage } from './../pages/settings/settings';

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
  pages: PageObj[];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private translate: TranslateService,
    private settings: Settings
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

    // set translation options
    this.translate.setDefaultLang('de');

    // this.settings
    //   .getItem('appLanguage')
    //   .subscribe(data => {
    //     if (data.newValue) {
    //       this.translate.use(data.newValue);
    //     } else {
    //       this.translate.use('de');
    //     }
    //   });

    this.translate.use('de');

    // set languages
    this.translate.setTranslation('en', localizations['en']);
    this.translate.setTranslation('de', localizations['de']);

    // init menu
    this.translate.get([
      'sidebar.menuitem.offers',
      'sidebar.menuitem.about',
      'sidebar.menuitem.settings'
    ]).subscribe(translations => {
      this.pages = [
        {title: translations['sidebar.menuitem.offers'], component: HelloIonicPage, icon: 'bulb'},
        {title: translations['sidebar.menuitem.about'], component: AboutPage, index: 1, icon: 'information-circle'},
        {title: translations['sidebar.menuitem.settings'], component: SettingsPage, index: 1, icon: 'settings'}
      ];
    });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
