import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Companies, Category, Offer } from './../../providers/companies';
import { CategoryFilterPage } from './../category-filter/category-filter';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  shownCategories: Category[] = [];
  companies;
  visibleOffersCount: number;

  constructor(
    private companiesService: Companies,
    private modalCtrl: ModalController,
    private language: TranslateService
  ) {
    this.companiesService.loadCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  resolveCatName(category: Category) {
    return category[`name_${this.language.currentLang}`];
  }

  ionViewDidEnter() {
    this.updateOffers();
  }

  updateOffers() {
    let offersCount = 0;
    this.companies.forEach((offer: Offer) => {
      if (this.shownCategories.length > 0) {
        // filter only matching ones
        this.shownCategories.forEach((cat: Category) => {
          if (offer.category === cat.type) {
            offer.hidden = false;
            offersCount++;
          } else {
            offer.hidden = true;
          }
        });
      } else {
        // reset
        offer.hidden = false;
        offersCount++;
      }
    });

    this.visibleOffersCount = offersCount;
  }

  presentFilter() {
    let modal = this.modalCtrl.create(CategoryFilterPage, {
      shownTags: this.shownCategories
    });
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        this.shownCategories = data;
        this.updateOffers();
      }
    });
  }

  resetFilter($event) {
    this.shownCategories = [];
    this.updateOffers();
  }

  removeCategory(category: Category) {
    this.shownCategories = this.shownCategories.filter(
      (entry: Category) => entry.type !== category.type
    );
    this.updateOffers();
  }
}
