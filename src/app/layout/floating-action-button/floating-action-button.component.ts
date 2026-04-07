import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModalService } from '../../core/services/auth-modal.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-floating-action-button',
  standalone: true,
  imports: [],
  templateUrl: './floating-action-button.component.html',
  styleUrl: './floating-action-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingActionButtonComponent {
  private readonly router = inject(Router);
  private readonly authModal = inject(AuthModalService);
  readonly auth = inject(AuthService);

  handleUploadClick(): void {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: 'upload' as const,
        title: 'Sign in to upload your first video',
        description: 'Join Cinematic Curator to publish videos, build your channel, and unlock creator tools.',
        redirectUrl: '/upload',
        preferredMode: 'signin' as const
      };

      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }

    this.auth.enableCreatorMode();
    void this.router.navigateByUrl('/upload');
  }
}
