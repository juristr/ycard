import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  currentLanguage;

  constructor(private translate: TranslateService){
    this.currentLanguage = translate.currentLang;
  }

  onLanguageChanged(value) {
    this.translate.currentLang = value;
  }
}
