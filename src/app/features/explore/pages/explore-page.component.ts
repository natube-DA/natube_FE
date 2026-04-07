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
import { VideoCardModel } from '../../../core/models/content.models';
import { CreatorContentService } from '../../../core/services/creator-content.service';
import { LayoutService } from '../../../core/services/layout.service';
import { FeaturedVideoCardComponent } from '../../../shared/featured-video-card/featured-video-card.component';
import { FloatingActionButtonComponent } from '../../../layout/floating-action-button/floating-action-button.component';
import { MobileNavComponent } from '../../../layout/mobile-nav/mobile-nav.component';
import { SectionHeaderComponent } from '../../../shared/section-header/section-header.component';
import { ShortCardComponent } from '../../../shared/short-card/short-card.component';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';
import { TopNavbarComponent } from '../../../layout/top-navbar/top-navbar.component';
import { VideoCardComponent } from '../../../shared/video-card/video-card.component';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [
    FeaturedVideoCardComponent,
    FloatingActionButtonComponent,
    MobileNavComponent,
    SectionHeaderComponent,
    ShortCardComponent,
    SideNavComponent,
    TopNavbarComponent,
    VideoCardComponent
  ],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorePageComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly content = inject(CreatorContentService);

  readonly layout = inject(LayoutService);
  readonly selectedGenre = signal('All');
  readonly genres = ['All', 'Documentary', 'Experimental', 'Architecture', 'Cinematography'];

  readonly trending = computed(() => this.content.recentUploads().slice(0, 4));
  readonly freshUploads = computed(() => this.filterVideos(this.content.recentUploads().slice(1)));
  readonly hiddenGems = computed(() => this.filterVideos([this.content.recentUploads()[2], this.content.recentUploads()[3]].filter(Boolean)));
  readonly shortDiscoveries = computed(() => this.content.shortFilms().slice(0, 6));

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

  setGenre(genre: string): void {
    this.selectedGenre.set(genre);
  }

  private filterVideos(items: readonly VideoCardModel[]): VideoCardModel[] {
    if (this.selectedGenre() === 'All') {
      return [...items];
    }

    return items.filter(
      (item) =>
        item.category === this.selectedGenre() || item.creator.specialty === this.selectedGenre()
    );
  }
}
