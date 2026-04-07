import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthModalService } from '../services/auth-modal.service';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const authModal = inject(AuthModalService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  authService.setPendingIntent({
    kind: 'upload',
    title: 'Sign in to upload your first video',
    description: 'Create an account or sign in to access creator tools and publish new content.',
    redirectUrl: '/upload',
    preferredMode: 'signin'
  });
  authModal.openForIntent({
    kind: 'upload',
    title: 'Sign in to upload your first video',
    description: 'Create an account or sign in to access creator tools and publish new content.',
    redirectUrl: '/upload',
    preferredMode: 'signin'
  });

  return router.createUrlTree(['/creator']);
};
