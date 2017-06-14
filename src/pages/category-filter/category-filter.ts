// 3d party imports
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Category } from './../../providers/companies';
import { Companies } from '../../providers/companies';

@Component({
  selector: 'page-category-filter',
  templateUrl: 'category-filter.html'
})
export class CategoryFilterPage {
  currentLanguage: string;

  tags: Array<{category: Category, isChecked: boolean}> = [];

  constructor(
              private conferenceData: Companies,
              private navParams: NavParams,
              private viewCtrl: ViewController,
              private translate: TranslateService) {

    this.currentLanguage = translate.currentLang;
    console.log(this.currentLanguage);

    // passed in array of track names that should be shown (check)
    let shownTags = this.navParams.data.shownTags;

    this.conferenceData.getCategories().subscribe((tagNames: Category[]) => {

      let newCategory = [];
      tagNames.forEach(tagName => {
        let cat = {
          category: tagName,
          isChecked: false
        };

        shownTags.forEach(t => {
          if(t.type === cat.category.type) {
            cat.isChecked = true;
            return;
          }
        });

        newCategory.push(cat);
      });
      this.tags = newCategory;
    });

  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tags.forEach(track => {
      track.isChecked = false;
    });
  }

  applyFilters() {
    // Pass back a new array of tags to show
    let shownTags = this.tags.filter(c => c.isChecked).map(c => c.category);
    this.dismiss(shownTags);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}
