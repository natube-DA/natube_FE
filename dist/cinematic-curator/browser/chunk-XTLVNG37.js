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
import {
  AuthService,
  TranslatePipe
} from "./chunk-HALBEQZX.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VWYUV7GB.js";

// src/app/features/home/pages/home-page.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function HomePageComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.badge);
  }
}
function HomePageComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function HomePageComponent_For_16_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSort(option_r2.value));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HomePageComponent_For_16_Conditional_4_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("home-page__tab--active", ctx_r2.selectedSort() === option_r2.value);
    \u0275\u0275attribute("aria-selected", ctx_r2.selectedSort() === option_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, option_r2.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r2.badge ? 4 : -1);
  }
}
function HomePageComponent_Conditional_17_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const genre_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(genre_r4);
  }
}
function HomePageComponent_Conditional_17_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div")(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const creator_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", creator_r5.avatarUrl, \u0275\u0275sanitizeUrl)("alt", creator_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(creator_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(creator_r5.tagline);
  }
}
function HomePageComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 11)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275repeaterCreate(12, HomePageComponent_Conditional_17_For_13_Template, 2, 1, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275element(15, "app-featured-video-card", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "section", 17);
    \u0275\u0275element(17, "app-section-header", 18);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275repeaterCreate(20, HomePageComponent_Conditional_17_For_21_Template, 7, 4, "article", 20, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "home.startHere"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "home.buildTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "home.buildDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.starterGenres);
    \u0275\u0275advance(3);
    \u0275\u0275property("item", ctx_r2.content.featuredVideo());
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(18, 11, "home.suggestedCreators"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.suggestedCreators());
  }
}
function HomePageComponent_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 16);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("item", item_r6);
  }
}
function HomePageComponent_Conditional_18_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-card", 16);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("item", item_r7);
  }
}
function HomePageComponent_Conditional_18_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 28)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r8.creator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r8.description);
  }
}
function HomePageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17);
    \u0275\u0275element(1, "app-section-header", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, HomePageComponent_Conditional_18_For_5_Template, 1, 1, "app-video-card", 16, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 17);
    \u0275\u0275element(7, "app-section-header", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 25);
    \u0275\u0275element(11, "app-featured-video-card", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, HomePageComponent_Conditional_18_For_13_Template, 1, 1, "app-video-card", 16, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "section", 17);
    \u0275\u0275element(15, "app-section-header", 26);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275repeaterCreate(18, HomePageComponent_Conditional_18_For_19_Template, 7, 3, "article", 28, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "home.continueWatching"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.continueWatching());
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 6, "home.newFromFollowed"));
    \u0275\u0275advance(4);
    \u0275\u0275property("item", ctx_r2.content.featuredVideo());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.followedCreatorsFeed());
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(16, 8, "home.missedThisWeek"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.missedThisWeek());
  }
}
var _HomePageComponent = class _HomePageComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.content = inject(CreatorContentService);
    this.auth = inject(AuthService);
    this.layout = inject(LayoutService);
    this.selectedSort = signal("for-you", ...ngDevMode ? [{ debugName: "selectedSort" }] : []);
    this.starterGenres = ["Documentary", "Experimental", "Architecture", "Motion Design"];
    this.sortOptions = [
      { value: "for-you", label: "home.forYou" },
      { value: "newest", label: "home.newest" },
      { value: "unwatched", label: "home.unwatched", badge: 3 }
    ];
    this.continueWatching = computed(() => this.content.recentUploads().slice(0, 3), ...ngDevMode ? [{ debugName: "continueWatching" }] : []);
    this.followedCreatorsFeed = computed(() => {
      const uploads = [...this.content.recentUploads()];
      if (this.selectedSort() === "newest") {
        return uploads.reverse();
      }
      if (this.selectedSort() === "unwatched") {
        return uploads.filter((_, index) => index !== 1);
      }
      return [uploads[1], uploads[0], uploads[3], uploads[2]].filter(Boolean);
    }, ...ngDevMode ? [{ debugName: "followedCreatorsFeed" }] : []);
    this.missedThisWeek = computed(() => this.content.masterclasses().slice(0, 2), ...ngDevMode ? [{ debugName: "missedThisWeek" }] : []);
    this.suggestedCreators = computed(() => this.content.creatorDiscoveries().slice(0, 3), ...ngDevMode ? [{ debugName: "suggestedCreators" }] : []);
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  setSort(value) {
    this.selectedSort.set(value);
  }
};
_HomePageComponent.\u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageComponent)();
};
_HomePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], hostBindings: function HomePageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function HomePageComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 21, vars: 14, consts: [[1, "home-page"], [1, "home-page__header"], [1, "home-page__heading"], [1, "home-page__eyebrow", "text-label"], [1, "page-title", "home-page__title"], [1, "home-page__subtitle"], ["role", "tablist", "aria-label", "Home feed filters", 1, "home-page__sorts"], ["type", "button", "role", "tab", 1, "home-page__tab", 3, "home-page__tab--active"], ["type", "button", "role", "tab", 1, "home-page__tab", 3, "click"], [1, "home-page__tab-badge"], [1, "home-page__guest", "surface-card"], [1, "home-page__guest-copy"], [1, "card-title"], [1, "home-page__genre-row"], [1, "home-page__genre-pill"], [1, "home-page__guest-feature"], [3, "item"], [1, "home-page__section"], ["accent", "primary", 3, "title"], [1, "home-page__creator-grid"], [1, "home-page__creator-card", "surface-card"], [3, "src", "alt"], ["accent", "tertiary", 3, "title"], [1, "home-page__video-grid", "home-page__video-grid--three"], [1, "home-page__feed"], [1, "home-page__hero-slot"], ["accent", "secondary", 3, "title"], [1, "home-page__digest"], [1, "home-page__digest-card", "surface-card"], [1, "text-label"]], template: function HomePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-top-navbar")(1, "app-side-nav");
    \u0275\u0275elementStart(2, "main", 0)(3, "header", 1)(4, "div", 2)(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 5);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6);
    \u0275\u0275repeaterCreate(15, HomePageComponent_For_16_Template, 5, 7, "button", 7, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, HomePageComponent_Conditional_17_Template, 22, 13)(18, HomePageComponent_Conditional_18_Template, 20, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "app-floating-action-button")(20, "app-mobile-nav");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("home-page--collapsed", ctx.layout.sidebarCollapsed())("home-page--mobile", ctx.layout.isMobile());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "home.eyebrow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "home.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "home.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.sortOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.auth.isAuthenticated() ? 17 : 18);
  }
}, dependencies: [
  FeaturedVideoCardComponent,
  FloatingActionButtonComponent,
  MobileNavComponent,
  SectionHeaderComponent,
  SideNavComponent,
  TopNavbarComponent,
  VideoCardComponent,
  TranslatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.home-page[_ngcontent-%COMP%] {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.home-page--collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.home-page--mobile[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.home-page__header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.home-page__heading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n}\n.home-page__eyebrow[_ngcontent-%COMP%], \n.home-page__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.home-page__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n}\n.home-page__title[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.6rem;\n  font-size: clamp(2.2rem, 5vw, 3.4rem);\n}\n.home-page__subtitle[_ngcontent-%COMP%] {\n  max-inline-size: 44rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.home-page__sorts[_ngcontent-%COMP%], \n.home-page__genre-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.home-page__genre-pill[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  font-weight: 700;\n}\n.home-page__genre-pill[_ngcontent-%COMP%] {\n  background: rgba(76, 214, 251, 0.12);\n  color: var(--color-tertiary);\n}\n.home-page__sorts[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding: 0.25rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  gap: 0.25rem;\n}\n.home-page__tab[_ngcontent-%COMP%] {\n  min-block-size: 2rem;\n  padding-inline: 0.85rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--color-on-surface-variant);\n  font: 700 0.9rem/1 "Inter", sans-serif;\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.home-page__tab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-on-surface);\n}\n.home-page__tab[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.home-page__tab--active[_ngcontent-%COMP%] {\n  background: rgba(76, 214, 251, 0.16);\n  color: var(--color-tertiary);\n}\n.home-page__tab-badge[_ngcontent-%COMP%] {\n  min-inline-size: 1.25rem;\n  min-block-size: 1.25rem;\n  padding-inline: 0.3rem;\n  border-radius: var(--radius-pill);\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: currentColor;\n  font-size: 0.72rem;\n}\n.home-page__guest[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-bottom: 2.5rem;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);\n  gap: 1.5rem;\n  align-items: center;\n}\n.home-page__guest-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.home-page__guest-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.home-page__creator-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.home-page__digest-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.home-page__digest-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.home-page__guest-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.home-page__guest-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-of-type, \n.home-page__creator-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, \n.home-page__digest-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n.home-page__section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.home-page__creator-grid[_ngcontent-%COMP%], \n.home-page__digest[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.home-page__creator-card[_ngcontent-%COMP%], \n.home-page__digest-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: grid;\n  gap: 0.75rem;\n}\n.home-page__creator-card[_ngcontent-%COMP%] {\n  grid-template-columns: 3rem 1fr;\n  align-items: center;\n}\n.home-page__creator-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.home-page__video-grid--three[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.home-page__feed[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n.home-page__hero-slot[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n@media (max-width: 1199px) {\n  .home-page__guest[_ngcontent-%COMP%], \n   .home-page__creator-grid[_ngcontent-%COMP%], \n   .home-page__digest[_ngcontent-%COMP%], \n   .home-page__video-grid--three[_ngcontent-%COMP%], \n   .home-page__feed[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .home-page__hero-slot[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 767px) {\n  .home-page[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .home-page__guest[_ngcontent-%COMP%], \n   .home-page__creator-grid[_ngcontent-%COMP%], \n   .home-page__digest[_ngcontent-%COMP%], \n   .home-page__video-grid--three[_ngcontent-%COMP%], \n   .home-page__feed[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .home-page__hero-slot[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-row: auto;\n  }\n}\n/*# sourceMappingURL=home-page.component.css.map */'], changeDetection: 0 });
var HomePageComponent = _HomePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [
      FeaturedVideoCardComponent,
      FloatingActionButtonComponent,
      MobileNavComponent,
      SectionHeaderComponent,
      SideNavComponent,
      TopNavbarComponent,
      VideoCardComponent,
      TranslatePipe
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-top-navbar></app-top-navbar>
<app-side-nav></app-side-nav>

<main class="home-page" [class.home-page--collapsed]="layout.sidebarCollapsed()" [class.home-page--mobile]="layout.isMobile()">
  <header class="home-page__header">
    <div class="home-page__heading">
      <p class="home-page__eyebrow text-label">{{ 'home.eyebrow' | translate }}</p>
      <h1 class="page-title home-page__title">{{ 'home.title' | translate }}</h1>
      <p class="home-page__subtitle">{{ 'home.subtitle' | translate }}</p>
    </div>

    <div class="home-page__sorts" role="tablist" aria-label="Home feed filters">
      @for (option of sortOptions; track option.value) {
        <button
          type="button"
          role="tab"
          class="home-page__tab"
          [class.home-page__tab--active]="selectedSort() === option.value"
          [attr.aria-selected]="selectedSort() === option.value"
          (click)="setSort(option.value)">
          <span>{{ option.label | translate }}</span>
          @if (option.badge) {
            <span class="home-page__tab-badge">{{ option.badge }}</span>
          }
        </button>
      }
    </div>
  </header>

  @if (!auth.isAuthenticated()) {
    <section class="home-page__guest surface-card">
      <div class="home-page__guest-copy">
        <p class="home-page__eyebrow text-label">{{ 'home.startHere' | translate }}</p>
        <h2 class="card-title">{{ 'home.buildTitle' | translate }}</h2>
        <p>{{ 'home.buildDescription' | translate }}</p>

        <div class="home-page__genre-row">
          @for (genre of starterGenres; track genre) {
            <span class="home-page__genre-pill">{{ genre }}</span>
          }
        </div>
      </div>

      <div class="home-page__guest-feature">
        <app-featured-video-card [item]="content.featuredVideo()"></app-featured-video-card>
      </div>
    </section>

    <section class="home-page__section">
      <app-section-header [title]="'home.suggestedCreators' | translate" accent="primary"></app-section-header>
      <div class="home-page__creator-grid">
        @for (creator of suggestedCreators(); track creator.id) {
          <article class="home-page__creator-card surface-card">
            <img [src]="creator.avatarUrl" [alt]="creator.name" />
            <div>
              <p class="card-title">{{ creator.name }}</p>
              <p>{{ creator.tagline }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  } @else {
    <section class="home-page__section">
      <app-section-header [title]="'home.continueWatching' | translate" accent="tertiary"></app-section-header>
      <div class="home-page__video-grid home-page__video-grid--three">
        @for (item of continueWatching(); track item.id) {
          <app-video-card [item]="item"></app-video-card>
        }
      </div>
    </section>

    <section class="home-page__section">
      <app-section-header [title]="'home.newFromFollowed' | translate" accent="primary"></app-section-header>
      <div class="home-page__feed">
        <div class="home-page__hero-slot">
          <app-featured-video-card [item]="content.featuredVideo()"></app-featured-video-card>
        </div>

        @for (item of followedCreatorsFeed(); track item.id) {
          <app-video-card [item]="item"></app-video-card>
        }
      </div>
    </section>

    <section class="home-page__section">
      <app-section-header [title]="'home.missedThisWeek' | translate" accent="secondary"></app-section-header>
      <div class="home-page__digest">
        @for (lesson of missedThisWeek(); track lesson.id) {
          <article class="home-page__digest-card surface-card">
            <p class="text-label">{{ lesson.creator.name }}</p>
            <h3 class="card-title">{{ lesson.title }}</h3>
            <p>{{ lesson.description }}</p>
          </article>
        }
      </div>
    </section>
  }
</main>

<app-floating-action-button></app-floating-action-button>
<app-mobile-nav></app-mobile-nav>
`, styles: ['/* src/app/features/home/pages/home-page.component.scss */\n:host {\n  display: block;\n}\n.home-page {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.home-page--collapsed {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.home-page--mobile {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.home-page__header {\n  margin-bottom: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.home-page__heading {\n  display: grid;\n  gap: 0;\n}\n.home-page__eyebrow,\n.home-page__subtitle {\n  margin: 0;\n}\n.home-page__eyebrow {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n}\n.home-page__title {\n  margin: 0.35rem 0 0.6rem;\n  font-size: clamp(2.2rem, 5vw, 3.4rem);\n}\n.home-page__subtitle {\n  max-inline-size: 44rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.home-page__sorts,\n.home-page__genre-row {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.home-page__genre-pill {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  font-weight: 700;\n}\n.home-page__genre-pill {\n  background: rgba(76, 214, 251, 0.12);\n  color: var(--color-tertiary);\n}\n.home-page__sorts {\n  min-block-size: 2.5rem;\n  padding: 0.25rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  gap: 0.25rem;\n}\n.home-page__tab {\n  min-block-size: 2rem;\n  padding-inline: 0.85rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--color-on-surface-variant);\n  font: 700 0.9rem/1 "Inter", sans-serif;\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.home-page__tab:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-on-surface);\n}\n.home-page__tab:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.home-page__tab--active {\n  background: rgba(76, 214, 251, 0.16);\n  color: var(--color-tertiary);\n}\n.home-page__tab-badge {\n  min-inline-size: 1.25rem;\n  min-block-size: 1.25rem;\n  padding-inline: 0.3rem;\n  border-radius: var(--radius-pill);\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: currentColor;\n  font-size: 0.72rem;\n}\n.home-page__guest {\n  padding: 1.5rem;\n  margin-bottom: 2.5rem;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);\n  gap: 1.5rem;\n  align-items: center;\n}\n.home-page__guest-copy h2,\n.home-page__guest-copy p,\n.home-page__creator-card p,\n.home-page__digest-card p,\n.home-page__digest-card h3 {\n  margin: 0;\n}\n.home-page__guest-copy {\n  display: grid;\n  gap: 1rem;\n}\n.home-page__guest-copy > p:last-of-type,\n.home-page__creator-card p:last-child,\n.home-page__digest-card p:last-child {\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n.home-page__section {\n  margin-bottom: 3rem;\n}\n.home-page__creator-grid,\n.home-page__digest {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.home-page__creator-card,\n.home-page__digest-card {\n  padding: 1rem;\n  display: grid;\n  gap: 0.75rem;\n}\n.home-page__creator-card {\n  grid-template-columns: 3rem 1fr;\n  align-items: center;\n}\n.home-page__creator-card img {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.home-page__video-grid--three {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.home-page__feed {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n.home-page__hero-slot {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n@media (max-width: 1199px) {\n  .home-page__guest,\n  .home-page__creator-grid,\n  .home-page__digest,\n  .home-page__video-grid--three,\n  .home-page__feed {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .home-page__hero-slot {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 767px) {\n  .home-page {\n    margin-inline-start: 0;\n  }\n  .home-page__guest,\n  .home-page__creator-grid,\n  .home-page__digest,\n  .home-page__video-grid--three,\n  .home-page__feed {\n    grid-template-columns: 1fr;\n  }\n  .home-page__hero-slot {\n    grid-column: auto;\n    grid-row: auto;\n  }\n}\n/*# sourceMappingURL=home-page.component.css.map */\n'] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/features/home/pages/home-page.component.ts", lineNumber: 42 });
})();
export {
  HomePageComponent
};
//# sourceMappingURL=chunk-XTLVNG37.js.map
