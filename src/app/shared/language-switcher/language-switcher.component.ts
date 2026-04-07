import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  inject,
  signal
} from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly language = inject(LanguageService);
  readonly isOpen = signal(false);

  @Input() showLabel = true;
  @Input() compact = false;

  toggle(): void {
    this.isOpen.update((value) => !value);
  }

  async selectLanguage(code: string): Promise<void> {
    await this.language.setLanguage(code);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }
}
