import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class Companies {
  //  companies = [
  //     {
  //       title: 'Nails Elite',
  //       location: 'Viale Trieste 66, 39100 Bolzano',
  //       logoUrl: 'assets/logos/nailselite.jpg',
  //       website: 'http://www.nailselite.it/',
  //       discount: '15%',
  //       description: 'Sconto su tutti i prodotti',
  //       facebook: null
  //     }
  // ];

  constructor(public http: Http) {
  }

  loadCompanies() : Observable<any> {
    return this.http
        .get('/assets/data/companies2017.json')
        .map(res => res.json());

    // return Observable.create((obs: Observer<any>) => {
    //   obs.next(this.companies);
    // });
  }

}
