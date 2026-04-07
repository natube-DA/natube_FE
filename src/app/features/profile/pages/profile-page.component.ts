import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthModalService } from '../../../core/services/auth-modal.service';
import { AuthService } from '../../../core/services/auth.service';
import { LayoutService } from '../../../core/services/layout.service';
import { FloatingActionButtonComponent } from '../../../layout/floating-action-button/floating-action-button.component';
import { MobileNavComponent } from '../../../layout/mobile-nav/mobile-nav.component';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';
import { TopNavbarComponent } from '../../../layout/top-navbar/top-navbar.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FloatingActionButtonComponent, MobileNavComponent, SideNavComponent, TopNavbarComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly authModal = inject(AuthModalService);
  private readonly router = inject(Router);

  readonly auth = inject(AuthService);
  readonly layout = inject(LayoutService);

  readonly accountHighlights = [
    'Sync watch preferences across devices',
    'Save creators, playlists, and release alerts',
    'Unlock creator tools and upload workflows'
  ];

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }

  openSignIn(): void {
    this.auth.setPendingIntent({
      kind: 'profile',
      title: 'Sign in to manage your profile',
      description: 'Access your saved preferences, creator tools, and account settings.',
      redirectUrl: '/profile',
      preferredMode: 'signin'
    });
    this.authModal.openForIntent({
      kind: 'profile',
      title: 'Sign in to manage your profile',
      description: 'Access your saved preferences, creator tools, and account settings.',
      redirectUrl: '/profile',
      preferredMode: 'signin'
    });
  }

  openSignUp(): void {
    this.auth.setPendingIntent({
      kind: 'profile',
      title: 'Create your account',
      description: 'Set up your cinematic profile and keep your creator preferences in sync.',
      redirectUrl: '/profile',
      preferredMode: 'signup'
    });
    this.authModal.openForIntent({
      kind: 'profile',
      title: 'Create your account',
      description: 'Set up your cinematic profile and keep your creator preferences in sync.',
      redirectUrl: '/profile',
      preferredMode: 'signup'
    });
  }

  enableCreatorMode(): void {
    this.auth.enableCreatorMode();
    void this.router.navigateByUrl('/upload');
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigateByUrl('/creator');
  }
}
