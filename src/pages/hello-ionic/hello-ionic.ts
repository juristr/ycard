import { Component, OnInit } from '@angular/core';
import { Companies } from './../../providers/companies';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit {
  companies;

  constructor(private companiesService:Companies) {
  }

  ngOnInit() {
    this.companiesService.loadCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

}
