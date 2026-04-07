import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../../core/services/auth.service';
import { LanguageSwitcherComponent } from '../../../../shared/language-switcher/language-switcher.component';

@Component({
  selector: 'app-user-dropdown',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDropdownComponent {
  readonly auth = inject(AuthService);

  @Output() readonly closeMenu = new EventEmitter<void>();
  @Output() readonly upload = new EventEmitter<void>();
  @Output() readonly toggleCreatorMode = new EventEmitter<void>();
  @Output() readonly logoutUser = new EventEmitter<void>();

  onNavigate(): void {
    this.closeMenu.emit();
  }
}
