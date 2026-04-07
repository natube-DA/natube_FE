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
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { CreatorContentService } from '../../../core/services/creator-content.service';
import { LayoutService } from '../../../core/services/layout.service';
import { FeaturedVideoCardComponent } from '../../../shared/featured-video-card/featured-video-card.component';
import { FloatingActionButtonComponent } from '../../../layout/floating-action-button/floating-action-button.component';
import { MobileNavComponent } from '../../../layout/mobile-nav/mobile-nav.component';
import { SectionHeaderComponent } from '../../../shared/section-header/section-header.component';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';
import { TopNavbarComponent } from '../../../layout/top-navbar/top-navbar.component';
import { VideoCardComponent } from '../../../shared/video-card/video-card.component';

type HomeSort = 'for-you' | 'newest' | 'unwatched';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FeaturedVideoCardComponent,
    FloatingActionButtonComponent,
    MobileNavComponent,
    SectionHeaderComponent,
    SideNavComponent,
    TopNavbarComponent,
    VideoCardComponent,
    TranslatePipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly content = inject(CreatorContentService);

  readonly auth = inject(AuthService);
  readonly layout = inject(LayoutService);
  readonly selectedSort = signal<HomeSort>('for-you');

  readonly starterGenres = ['Documentary', 'Experimental', 'Architecture', 'Motion Design'];
  readonly sortOptions: readonly { value: HomeSort; label: string; badge?: number }[] = [
    { value: 'for-you', label: 'home.forYou' },
    { value: 'newest', label: 'home.newest' },
    { value: 'unwatched', label: 'home.unwatched', badge: 3 }
  ];

  readonly continueWatching = computed(() => this.content.recentUploads().slice(0, 3));
  readonly followedCreatorsFeed = computed(() => {
    const uploads = [...this.content.recentUploads()];

    if (this.selectedSort() === 'newest') {
      return uploads.reverse();
    }

    if (this.selectedSort() === 'unwatched') {
      return uploads.filter((_, index) => index !== 1);
    }

    return [uploads[1], uploads[0], uploads[3], uploads[2]].filter(Boolean);
  });

  readonly missedThisWeek = computed(() => this.content.masterclasses().slice(0, 2));
  readonly suggestedCreators = computed(() => this.content.creatorDiscoveries().slice(0, 3));

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

  setSort(value: HomeSort): void {
    this.selectedSort.set(value);
  }
}
