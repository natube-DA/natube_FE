import {
  FeaturedVideoCardComponent,
  VideoCardComponent
} from "./chunk-UIQ66MXL.js";
import {
  CreatorContentService,
  SectionHeaderComponent
} from "./chunk-FKH7C23Y.js";
import {
  FloatingActionButtonComponent,
  LayoutService,
  MobileNavComponent,
  SideNavComponent,
  TopNavbarComponent
} from "./chunk-5SL5Y3IF.js";
import "./chunk-HALBEQZX.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  PLATFORM_ID,
  computed,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VWYUV7GB.js";

// src/app/shared/short-card/short-card.component.ts
var _ShortCardComponent = class _ShortCardComponent {
};
_ShortCardComponent.\u0275fac = function ShortCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShortCardComponent)();
};
_ShortCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortCardComponent, selectors: [["app-short-card"]], inputs: { item: "item" }, decls: 7, vars: 4, consts: [[1, "short-card", "surface-card"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt"], [1, "short-card__overlay"], [1, "text-label", "short-card__category"], [1, "card-title", "short-card__title"]], template: function ShortCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275domElementStart(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h4", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx.item.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.item.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.title);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.short-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 9/16;\n}\n.short-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 500ms ease;\n}\n.short-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.short-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  gap: 0.25rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 45%,\n      rgba(0, 0, 0, 0.9) 100%);\n}\n.short-card__category[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-secondary);\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.short-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n/*# sourceMappingURL=short-card.component.css.map */"], changeDetection: 0 });
var ShortCardComponent = _ShortCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShortCardComponent, [{
    type: Component,
    args: [{ selector: "app-short-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<article class="short-card surface-card">\n  <img\n    [src]="item.thumbnailUrl"\n    [alt]="item.title"\n    loading="lazy"\n    decoding="async"\n    referrerpolicy="no-referrer"\n  />\n\n  <div class="short-card__overlay">\n    <p class="text-label short-card__category">{{ item.category }}</p>\n    <h4 class="card-title short-card__title">{{ item.title }}</h4>\n  </div>\n</article>\n', styles: ["/* src/app/shared/short-card/short-card.component.scss */\n:host {\n  display: block;\n}\n.short-card {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 9/16;\n}\n.short-card img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 500ms ease;\n}\n.short-card:hover img {\n  transform: scale(1.08);\n}\n.short-card__overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  gap: 0.25rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 45%,\n      rgba(0, 0, 0, 0.9) 100%);\n}\n.short-card__category {\n  margin: 0;\n  color: var(--color-secondary);\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.short-card__title {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n/*# sourceMappingURL=short-card.component.css.map */\n"] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortCardComponent, { className: "ShortCardComponent", filePath: "src/app/shared/short-card/short-card.component.ts", lineNumber: 11 });
})();

// src/app/features/explore/pages/explore-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExplorePageComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ExplorePageComponent_For_13_Template_button_click_0_listener() {
      const genre_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setGenre(genre_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const genre_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("explore-page__chip--active", ctx_r2.selectedGenre() === genre_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", genre_r2, " ");
  }
}
function ExplorePageComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 11);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("item", item_r4);
  }
}
function ExplorePageComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 11);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("item", item_r5);
  }
}
function ExplorePageComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 11);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("item", item_r6);
  }
}
function ExplorePageComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-short-card", 11);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("item", item_r7);
  }
}
var _ExplorePageComponent = class _ExplorePageComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.content = inject(CreatorContentService);
    this.layout = inject(LayoutService);
    this.selectedGenre = signal("All", ...ngDevMode ? [{ debugName: "selectedGenre" }] : []);
    this.genres = ["All", "Documentary", "Experimental", "Architecture", "Cinematography"];
    this.trending = computed(() => this.content.recentUploads().slice(0, 4), ...ngDevMode ? [{ debugName: "trending" }] : []);
    this.freshUploads = computed(() => this.filterVideos(this.content.recentUploads().slice(1)), ...ngDevMode ? [{ debugName: "freshUploads" }] : []);
    this.hiddenGems = computed(() => this.filterVideos([this.content.recentUploads()[2], this.content.recentUploads()[3]].filter(Boolean)), ...ngDevMode ? [{ debugName: "hiddenGems" }] : []);
    this.shortDiscoveries = computed(() => this.content.shortFilms().slice(0, 6), ...ngDevMode ? [{ debugName: "shortDiscoveries" }] : []);
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  setGenre(genre) {
    this.selectedGenre.set(genre);
  }
  filterVideos(items) {
    if (this.selectedGenre() === "All") {
      return [...items];
    }
    return items.filter((item) => item.category === this.selectedGenre() || item.creator.specialty === this.selectedGenre());
  }
};
_ExplorePageComponent.\u0275fac = function ExplorePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExplorePageComponent)();
};
_ExplorePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePageComponent, selectors: [["app-explore-page"]], hostBindings: function ExplorePageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function ExplorePageComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 45, vars: 5, consts: [[1, "explore-page"], [1, "explore-page__header"], [1, "explore-page__eyebrow", "text-label"], [1, "page-title", "explore-page__title"], [1, "explore-page__subtitle"], [1, "explore-page__chip-row"], ["type", "button", 1, "explore-page__chip", 3, "explore-page__chip--active"], [1, "explore-page__hero"], [1, "explore-page__hero-copy", "surface-card"], [1, "text-label"], [1, "card-title"], [3, "item"], [1, "explore-page__section"], ["title", "Trending Now", "accent", "tertiary"], [1, "explore-page__video-grid"], ["title", "Fresh Uploads", "accent", "primary"], ["title", "Hidden Gems", "accent", "secondary"], [1, "explore-page__video-grid", "explore-page__video-grid--two"], ["title", "Short Discoveries", "accent", "tertiary"], [1, "explore-page__short-grid"], ["type", "button", 1, "explore-page__chip", 3, "click"]], template: function ExplorePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-top-navbar")(1, "app-side-nav");
    \u0275\u0275elementStart(2, "main", 0)(3, "header", 1)(4, "div")(5, "p", 2);
    \u0275\u0275text(6, "Explore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 3);
    \u0275\u0275text(8, "Discover videos beyond your current circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 4);
    \u0275\u0275text(10, " Trending stories, fresh uploads, and under-the-radar finds curated to feel expansive without becoming chaotic. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275repeaterCreate(12, ExplorePageComponent_For_13_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "section", 7)(15, "div", 8)(16, "p", 9);
    \u0275\u0275text(17, "Discovery mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2", 10);
    \u0275\u0275text(19, "A structured mix of relevance, freshness, and cinematic serendipity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, " Explore is for videos from creators you do not already follow, organized into clear buckets so discovery feels intentional. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "app-featured-video-card", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "section", 12);
    \u0275\u0275element(24, "app-section-header", 13);
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275repeaterCreate(26, ExplorePageComponent_For_27_Template, 1, 1, "app-video-card", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "section", 12);
    \u0275\u0275element(29, "app-section-header", 15);
    \u0275\u0275elementStart(30, "div", 14);
    \u0275\u0275repeaterCreate(31, ExplorePageComponent_For_32_Template, 1, 1, "app-video-card", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "section", 12);
    \u0275\u0275element(34, "app-section-header", 16);
    \u0275\u0275elementStart(35, "div", 17);
    \u0275\u0275repeaterCreate(36, ExplorePageComponent_For_37_Template, 1, 1, "app-video-card", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "section", 12);
    \u0275\u0275element(39, "app-section-header", 18);
    \u0275\u0275elementStart(40, "div", 19);
    \u0275\u0275repeaterCreate(41, ExplorePageComponent_For_42_Template, 1, 1, "app-short-card", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(43, "app-floating-action-button")(44, "app-mobile-nav");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("explore-page--collapsed", ctx.layout.sidebarCollapsed())("explore-page--mobile", ctx.layout.isMobile());
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.genres);
    \u0275\u0275advance(10);
    \u0275\u0275property("item", ctx.trending()[0] || ctx.content.featuredVideo());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.trending());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.freshUploads());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.hiddenGems());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.shortDiscoveries());
  }
}, dependencies: [
  FeaturedVideoCardComponent,
  FloatingActionButtonComponent,
  MobileNavComponent,
  SectionHeaderComponent,
  ShortCardComponent,
  SideNavComponent,
  TopNavbarComponent,
  VideoCardComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.explore-page[_ngcontent-%COMP%] {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.explore-page--collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.explore-page--mobile[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.explore-page__header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  display: grid;\n  gap: 1rem;\n}\n.explore-page__eyebrow[_ngcontent-%COMP%], \n.explore-page__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.explore-page__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n}\n.explore-page__title[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.2rem, 5vw, 3.5rem);\n}\n.explore-page__subtitle[_ngcontent-%COMP%], \n.explore-page__hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.explore-page__chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.explore-page__chip[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface-variant);\n  font-weight: 700;\n}\n.explore-page__chip--active[_ngcontent-%COMP%] {\n  background: rgba(255, 74, 141, 0.14);\n  color: var(--color-primary);\n}\n.explore-page__hero[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  display: grid;\n  grid-template-columns: minmax(20rem, 25rem) minmax(0, 1fr);\n  gap: 1.5rem;\n  align-items: stretch;\n}\n.explore-page__hero-copy[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: grid;\n  align-content: end;\n  gap: 0.85rem;\n}\n.explore-page__hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.explore-page__hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.explore-page__section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.explore-page__video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n.explore-page__video-grid--two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.explore-page__short-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 1199px) {\n  .explore-page__hero[_ngcontent-%COMP%], \n   .explore-page__video-grid[_ngcontent-%COMP%], \n   .explore-page__video-grid--two[_ngcontent-%COMP%], \n   .explore-page__short-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 767px) {\n  .explore-page[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .explore-page__hero[_ngcontent-%COMP%], \n   .explore-page__video-grid[_ngcontent-%COMP%], \n   .explore-page__video-grid--two[_ngcontent-%COMP%], \n   .explore-page__short-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=explore-page.component.css.map */"], changeDetection: 0 });
var ExplorePageComponent = _ExplorePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePageComponent, [{
    type: Component,
    args: [{ selector: "app-explore-page", standalone: true, imports: [
      FeaturedVideoCardComponent,
      FloatingActionButtonComponent,
      MobileNavComponent,
      SectionHeaderComponent,
      ShortCardComponent,
      SideNavComponent,
      TopNavbarComponent,
      VideoCardComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<app-top-navbar></app-top-navbar>\n<app-side-nav></app-side-nav>\n\n<main class="explore-page" [class.explore-page--collapsed]="layout.sidebarCollapsed()" [class.explore-page--mobile]="layout.isMobile()">\n  <header class="explore-page__header">\n    <div>\n      <p class="explore-page__eyebrow text-label">Explore</p>\n      <h1 class="page-title explore-page__title">Discover videos beyond your current circle</h1>\n      <p class="explore-page__subtitle">\n        Trending stories, fresh uploads, and under-the-radar finds curated to feel expansive without becoming chaotic.\n      </p>\n    </div>\n\n    <div class="explore-page__chip-row">\n      @for (genre of genres; track genre) {\n        <button\n          type="button"\n          class="explore-page__chip"\n          [class.explore-page__chip--active]="selectedGenre() === genre"\n          (click)="setGenre(genre)">\n          {{ genre }}\n        </button>\n      }\n    </div>\n  </header>\n\n  <section class="explore-page__hero">\n    <div class="explore-page__hero-copy surface-card">\n      <p class="text-label">Discovery mode</p>\n      <h2 class="card-title">A structured mix of relevance, freshness, and cinematic serendipity</h2>\n      <p>\n        Explore is for videos from creators you do not already follow, organized into clear buckets so discovery feels intentional.\n      </p>\n    </div>\n\n    <app-featured-video-card [item]="trending()[0] || content.featuredVideo()"></app-featured-video-card>\n  </section>\n\n  <section class="explore-page__section">\n    <app-section-header title="Trending Now" accent="tertiary"></app-section-header>\n    <div class="explore-page__video-grid">\n      @for (item of trending(); track item.id) {\n        <app-video-card [item]="item"></app-video-card>\n      }\n    </div>\n  </section>\n\n  <section class="explore-page__section">\n    <app-section-header title="Fresh Uploads" accent="primary"></app-section-header>\n    <div class="explore-page__video-grid">\n      @for (item of freshUploads(); track item.id) {\n        <app-video-card [item]="item"></app-video-card>\n      }\n    </div>\n  </section>\n\n  <section class="explore-page__section">\n    <app-section-header title="Hidden Gems" accent="secondary"></app-section-header>\n    <div class="explore-page__video-grid explore-page__video-grid--two">\n      @for (item of hiddenGems(); track item.id) {\n        <app-video-card [item]="item"></app-video-card>\n      }\n    </div>\n  </section>\n\n  <section class="explore-page__section">\n    <app-section-header title="Short Discoveries" accent="tertiary"></app-section-header>\n    <div class="explore-page__short-grid">\n      @for (item of shortDiscoveries(); track item.id) {\n        <app-short-card [item]="item"></app-short-card>\n      }\n    </div>\n  </section>\n</main>\n\n<app-floating-action-button></app-floating-action-button>\n<app-mobile-nav></app-mobile-nav>\n', styles: ["/* src/app/features/explore/pages/explore-page.component.scss */\n:host {\n  display: block;\n}\n.explore-page {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.explore-page--collapsed {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.explore-page--mobile {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.explore-page__header {\n  margin-bottom: 2rem;\n  display: grid;\n  gap: 1rem;\n}\n.explore-page__eyebrow,\n.explore-page__subtitle {\n  margin: 0;\n}\n.explore-page__eyebrow {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n}\n.explore-page__title {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.2rem, 5vw, 3.5rem);\n}\n.explore-page__subtitle,\n.explore-page__hero-copy p:last-child {\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.explore-page__chip-row {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.explore-page__chip {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface-variant);\n  font-weight: 700;\n}\n.explore-page__chip--active {\n  background: rgba(255, 74, 141, 0.14);\n  color: var(--color-primary);\n}\n.explore-page__hero {\n  margin-bottom: 3rem;\n  display: grid;\n  grid-template-columns: minmax(20rem, 25rem) minmax(0, 1fr);\n  gap: 1.5rem;\n  align-items: stretch;\n}\n.explore-page__hero-copy {\n  padding: 1.5rem;\n  display: grid;\n  align-content: end;\n  gap: 0.85rem;\n}\n.explore-page__hero-copy p,\n.explore-page__hero-copy h2 {\n  margin: 0;\n}\n.explore-page__section {\n  margin-bottom: 3rem;\n}\n.explore-page__video-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n.explore-page__video-grid--two {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.explore-page__short-grid {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 1199px) {\n  .explore-page__hero,\n  .explore-page__video-grid,\n  .explore-page__video-grid--two,\n  .explore-page__short-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 767px) {\n  .explore-page {\n    margin-inline-start: 0;\n  }\n  .explore-page__hero,\n  .explore-page__video-grid,\n  .explore-page__video-grid--two,\n  .explore-page__short-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=explore-page.component.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePageComponent, { className: "ExplorePageComponent", filePath: "src/app/features/explore/pages/explore-page.component.ts", lineNumber: 40 });
})();
export {
  ExplorePageComponent
};
//# sourceMappingURL=chunk-M3SLOK2J.js.map
