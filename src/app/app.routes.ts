import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/pages/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    data: {
      title: 'Home',
      description: 'Latest from creators you follow, watch progress, and personal recommendations.'
    }
  },
  {
    path: 'explore',
    loadComponent: () =>
      import('./features/explore/pages/explore-page.component').then(
        (m) => m.ExplorePageComponent
      ),
    data: {
      title: 'Explore',
      description: 'Discover videos outside your current network through curated buckets and genres.'
    }
  },
  {
    path: 'creator',
    loadComponent: () =>
      import('./features/creator/pages/creator-explore-page.component').then(
        (m) => m.CreatorExplorePageComponent
      )
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
    data: {
      title: 'Profile',
      description: 'Account settings, creator tools and watch preferences.'
    }
  },
  {
    path: 'upload',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/upload/pages/upload-page.component').then(
        (m) => m.UploadPageComponent
      )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
