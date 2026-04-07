import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../core/models/navigation.models';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent {
  readonly navItems: readonly NavItem[] = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Explora', icon: 'explore', route: '/explore' },
    { label: 'Creators', icon: 'movie_filter', route: '/creator' },
    { label: 'Profile', icon: 'person', route: '/profile' }
  ];
}
