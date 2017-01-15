import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

export interface Category {
  name: string;
  type: string;
}

export interface Offer {
  title: string;
  category: string;
  location: string;
  logoUrl: string;
  discount: string;
  description: string;
  website: string;
  map: string;
  facebook: string;
  hidden: boolean;
}

@Injectable()
export class Companies {

  constructor(public http: Http) {
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get('/assets/data/categories.json')
      .map(res => res.json());
  }

  loadCompanies() : Observable<Offer[]> {
    return this.http
        .get('/assets/data/companies2017.json')
        .map(res => res.json());

    // return Observable.create((obs: Observer<any>) => {
    //   obs.next(this.companies);
    // });
  }

}
