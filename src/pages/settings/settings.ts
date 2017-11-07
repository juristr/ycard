import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Settings } from './../../providers/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  currentLanguage;

  constructor(private translate: TranslateService, private settings: Settings) {
    this.currentLanguage = translate.currentLang;
  }

  onLanguageChanged(value) {
    this.translate.use(value);
    this.settings.setItem('appLanguage', value);
  }
}
