import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';
import { NavItem } from '../../core/models/navigation.models';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  readonly layout = inject(LayoutService);

  readonly navItems: readonly NavItem[] = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Explora', icon: 'explore', route: '/explore' },
    { label: 'Creators', icon: 'movie_filter', route: '/creator' }
  ];
}
