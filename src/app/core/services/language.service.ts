import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export interface SupportedLanguage {
  readonly code: string;
  readonly nativeName: string;
}

const LANGUAGE_STORAGE_KEY = 'cinematic_curator_language';
const FALLBACK_LANGUAGE = 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);

  readonly supportedLanguages: readonly SupportedLanguage[] = [
    { code: 'it', nativeName: 'Italiano' },
    { code: 'en', nativeName: 'English' },
    { code: 'es', nativeName: 'Español' },
    { code: 'fr', nativeName: 'Français' },
    { code: 'de', nativeName: 'Deutsch' }
  ];

  readonly currentLanguage = signal(FALLBACK_LANGUAGE);

  async initialize(): Promise<void> {
    this.translate.addLangs(this.supportedLanguages.map((language) => language.code));
    this.translate.setDefaultLang(FALLBACK_LANGUAGE);

    const persistedLanguage = this.readPersistedLanguage();
    const nextLanguage = persistedLanguage ?? this.detectBrowserLanguage();

    await this.setLanguage(nextLanguage);
  }

  async setLanguage(lang: string): Promise<void> {
    const safeLanguage = this.isSupported(lang) ? lang : FALLBACK_LANGUAGE;

    await firstValueFrom(this.translate.use(safeLanguage));
    this.currentLanguage.set(safeLanguage);
    this.persistLanguage(safeLanguage);
    this.syncDocumentLanguage(safeLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage();
  }

  detectBrowserLanguage(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return FALLBACK_LANGUAGE;
    }

    const browserLanguage = navigator.language.split('-')[0].toLowerCase();
    return this.isSupported(browserLanguage) ? browserLanguage : FALLBACK_LANGUAGE;
  }

  persistLanguage(lang: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }

  getNativeLanguageName(code: string): string {
    return (
      this.supportedLanguages.find((language) => language.code === code)?.nativeName ?? 'English'
    );
  }

  private readPersistedLanguage(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  }

  private isSupported(lang: string): boolean {
    return this.supportedLanguages.some((language) => language.code === lang);
  }

  private syncDocumentLanguage(lang: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.documentElement.lang = lang;
  }
}
