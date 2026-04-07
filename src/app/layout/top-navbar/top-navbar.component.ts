import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthModalService } from '../../core/services/auth-modal.service';
import { AuthService } from '../../core/services/auth.service';
import { LayoutService } from '../../core/services/layout.service';
import { SearchService } from '../../core/services/search.service';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';
import { UserDropdownComponent } from '../../features/user/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [RouterLink, UserDropdownComponent, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavbarComponent {
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly authModal = inject(AuthModalService);

  readonly layout = inject(LayoutService);
  readonly search = inject(SearchService);
  readonly auth = inject(AuthService);
  readonly userMenuOpen = signal(false);
  readonly notificationsOpen = signal(false);

  readonly notifications = [
    'Your weekly curator digest is ready.',
    'A filmmaker you follow has published a new masterclass.',
    'Creator tools are available for your channel.'
  ];

  onQueryChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.search.updateQuery(value);
  }

  openSignIn(): void {
    this.auth.setPendingIntent(null);
      this.authModal.open({
      mode: 'signin',
      title: 'Welcome back',
      description: 'Sign in to continue watching, saving, and creating.'
    });
  }

  openSignUp(): void {
    this.auth.setPendingIntent(null);
    this.authModal.open({
      mode: 'signup',
      title: 'Create your account',
      description: 'Join Cinematic Curator to save favorites, follow creators, and unlock uploads.'
    });
  }

  handleUpload(): void {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: 'upload' as const,
        title: 'Sign in to upload your first video',
        description: 'Create an account or sign in to publish videos and access creator tools.',
        redirectUrl: '/upload',
        preferredMode: 'signin' as const
      };

      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }

    this.closeOverlays();
    this.auth.enableCreatorMode();
    void this.router.navigateByUrl('/upload');
  }

  toggleNotifications(): void {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: 'notifications' as const,
        title: 'Sign in to view notifications',
        description: 'Stay in sync with creators, replies, and uploads tailored to your account.',
        preferredMode: 'signin' as const
      };

      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }

    this.userMenuOpen.set(false);
    this.notificationsOpen.update((value) => !value);
  }

  toggleUserMenu(): void {
    this.notificationsOpen.set(false);
    this.userMenuOpen.update((value) => !value);
  }

  closeOverlays(): void {
    this.userMenuOpen.set(false);
    this.notificationsOpen.set(false);
  }

  toggleCreatorMode(): void {
    if (!this.auth.isCreator()) {
      this.auth.enableCreatorMode();
      this.userMenuOpen.set(false);
      void this.router.navigateByUrl('/upload');
      return;
    }

    this.auth.setCreatorMode(this.auth.role() !== 'creator');
    this.userMenuOpen.set(false);
  }

  logout(): void {
    this.auth.logout();
    this.closeOverlays();
    void this.router.navigateByUrl('/creator');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeOverlays();
    }
  }
}
