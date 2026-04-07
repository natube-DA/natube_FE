import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CreatorContentService } from '../../../core/services/creator-content.service';
import { LayoutService } from '../../../core/services/layout.service';
import { CreatorCardComponent } from '../../../shared/creator-card/creator-card.component';
import { FloatingActionButtonComponent } from '../../../layout/floating-action-button/floating-action-button.component';
import { MobileNavComponent } from '../../../layout/mobile-nav/mobile-nav.component';
import { SectionHeaderComponent } from '../../../shared/section-header/section-header.component';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';
import { TopNavbarComponent } from '../../../layout/top-navbar/top-navbar.component';

@Component({
  selector: 'app-creator-explore-page',
  standalone: true,
  imports: [
    CreatorCardComponent,
    FloatingActionButtonComponent,
    MobileNavComponent,
    SectionHeaderComponent,
    SideNavComponent,
    TopNavbarComponent
  ],
  templateUrl: './creator-explore-page.component.html',
  styleUrl: './creator-explore-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatorExplorePageComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly content = inject(CreatorContentService);

  readonly layout = inject(LayoutService);
  readonly selectedCategory = signal('All');
  readonly categories = ['All', 'Documentary', 'Architecture', 'Cinematography', 'Experimental', 'Nature'];

  readonly featuredCreators = computed(() =>
    this.content.creatorDiscoveries().filter((creator) => creator.statusLabel === 'Featured')
  );
  readonly risingCreators = computed(() =>
    this.filterCreators(
      this.content.creatorDiscoveries().filter((creator) => creator.statusLabel === 'Rising')
    )
  );
  readonly filteredCreators = computed(() => this.filterCreators(this.content.creatorDiscoveries()));

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

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  private filterCreators(items: ReturnType<CreatorContentService['creatorDiscoveries']>) {
    if (this.selectedCategory() === 'All') {
      return items;
    }

    return items.filter((creator) => creator.category === this.selectedCategory());
  }
}
