import { CategoryFilterPage } from './../pages/category-filter/category-filter';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { AboutPage } from '../pages/about/about';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { Companies } from '../providers/companies';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    SettingsPage,
    CategoryFilterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    SettingsPage,
    CategoryFilterPage
  ],
  providers: [
    Companies,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
