// translation.service.ts

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  get currentLanguage(): string {
    return this.translate.currentLang || 'en'; // Default to English if not set
  }
}
