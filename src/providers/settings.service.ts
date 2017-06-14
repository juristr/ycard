import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/filter';

export interface AppSettingEvent {
  key: string,
  newValue: any;
  oldValue: any;
}

@Injectable()
export class Settings {
  subject: Subject<AppSettingEvent>;
  updates: Observable<any>;

  constructor() {
    this.subject = new Subject();
    this.updates = this.subject.groupBy(x=>x.key).share();
  }

  getItem(key) {
    return this.updates.filter(x => x.key === key).merge();
  }

  setItem(key, newValue) {
    const oldValue = localStorage.getItem(key);
    const event = { key, newValue, oldValue };

    localStorage.setItem(key, newValue);

    this.subject.next(event);
  }
}
