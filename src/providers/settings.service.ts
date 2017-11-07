import { AppSettingEvent } from './settings.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/filter';

export interface AppSettingEvent {
  key: string;
  value: any;
}

@Injectable()
export class Settings {
  data: Object;
  // subject: BehaviorSubject<AppSettingEvent[]>;
  // updates: Observable<any>;

  constructor() {
    try {
      this.data = JSON.parse(localStorage.getItem('ycard.appsettings'));
    } catch (e) {
      console.error('Error reading local storage data', e);
    }

    if (!this.data) {
      this.data = {};
    }
    // this.subject = new BehaviorSubject(JSON.parse(
    //   localStorage.getItem('ycard.appsettings')
    // ) as AppSettingEvent[]);
    // this.subject = new BehaviorSubject({ key: 'app init' } as AppSettingEvent);
    // this.updates = this.subject.groupBy(x => x.key).share();
  }

  getItem(key, defaultValue = null) {
    if (this.data[key]) {
      return this.data[key];
    } else {
      return defaultValue;
    }
    // return this.subject.filter(x => x.key === key).merge();
  }

  setItem(key, newValue) {
    this.data[key] = newValue;
    this.updateStorage();
    // const oldValue = localStorage.getItem(key);
    // const event = { key, newValue, oldValue };
    // localStorage.setItem(key, newValue);
    // this.subject.next(event);
  }

  private updateStorage() {
    localStorage.setItem('ycard.appsettings', JSON.stringify(this.data));
  }
}
