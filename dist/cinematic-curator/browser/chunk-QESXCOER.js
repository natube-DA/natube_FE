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
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VWYUV7GB.js";

// src/app/shared/creator-card/creator-card.component.ts
function CreatorCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.statusLabel);
  }
}
function CreatorCardComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const thumbnail_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", thumbnail_r2, \u0275\u0275sanitizeUrl)("alt", ctx_r0.item.name + " preview");
  }
}
var _CreatorCardComponent = class _CreatorCardComponent {
};
_CreatorCardComponent.\u0275fac = function CreatorCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatorCardComponent)();
};
_CreatorCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatorCardComponent, selectors: [["app-creator-card"]], inputs: { item: "item" }, decls: 27, vars: 10, consts: [[1, "creator-card", "surface-card"], [1, "creator-card__top"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "creator-card__avatar", 3, "src", "alt"], [1, "creator-card__meta"], [1, "card-title", "creator-card__name"], [1, "creator-card__status"], [1, "creator-card__specialty"], [1, "creator-card__followers"], [1, "creator-card__tagline"], [1, "creator-card__bio"], [1, "creator-card__preview-grid"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt"], [1, "creator-card__footer"], [1, "creator-card__highlight"], [1, "creator-card__actions"], ["type", "button", 1, "creator-card__follow"], ["type", "button", 1, "creator-card__ghost"]], template: function CreatorCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "div")(4, "div", 3)(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, CreatorCardComponent_Conditional_7_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "p", 8);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 9);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, CreatorCardComponent_For_18_Template, 1, 2, "img", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 12)(20, "p", 13);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 14)(23, "button", 15);
    \u0275\u0275text(24, "Follow");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "button", 16);
    \u0275\u0275text(26, "Preview");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", ctx.item.avatarUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.item.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.item.statusLabel ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx.item.specialty, " \xB7 ", ctx.item.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.followersLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.tagline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.bio);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.item.sampleThumbnails);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.item.recentHighlight);
  }
}, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.creator-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: grid;\n  gap: 0.9rem;\n  min-block-size: 100%;\n}\n.creator-card__top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr;\n  gap: 0.85rem;\n  align-items: center;\n}\n.creator-card__avatar[_ngcontent-%COMP%] {\n  inline-size: 3.25rem;\n  block-size: 3.25rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.creator-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  flex-wrap: wrap;\n}\n.creator-card__name[_ngcontent-%COMP%], \n.creator-card__specialty[_ngcontent-%COMP%], \n.creator-card__followers[_ngcontent-%COMP%], \n.creator-card__tagline[_ngcontent-%COMP%], \n.creator-card__bio[_ngcontent-%COMP%], \n.creator-card__highlight[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.creator-card__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.creator-card__status[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-pill);\n  background: rgba(76, 214, 251, 0.12);\n  color: var(--color-tertiary);\n  font: 700 0.68rem/1 "Inter", sans-serif;\n  text-transform: uppercase;\n}\n.creator-card__specialty[_ngcontent-%COMP%], \n.creator-card__followers[_ngcontent-%COMP%], \n.creator-card__bio[_ngcontent-%COMP%] {\n  color: var(--color-on-surface-variant);\n  line-height: 1.5;\n}\n.creator-card__tagline[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.creator-card__preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n}\n.creator-card__preview-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  aspect-ratio: 1.15;\n  object-fit: cover;\n  border-radius: var(--radius-md);\n}\n.creator-card__footer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  margin-top: auto;\n}\n.creator-card__highlight[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n.creator-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n}\n.creator-card__follow[_ngcontent-%COMP%], \n.creator-card__ghost[_ngcontent-%COMP%] {\n  min-block-size: 2.6rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  font-weight: 800;\n}\n.creator-card__follow[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.creator-card__ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface);\n}\n/*# sourceMappingURL=creator-card.component.css.map */'], changeDetection: 0 });
var CreatorCardComponent = _CreatorCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatorCardComponent, [{
    type: Component,
    args: [{ selector: "app-creator-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<article class="creator-card surface-card">
  <div class="creator-card__top">
    <img
      class="creator-card__avatar"
      [src]="item.avatarUrl"
      [alt]="item.name"
      loading="lazy"
      decoding="async"
      referrerpolicy="no-referrer" />

    <div>
      <div class="creator-card__meta">
        <p class="card-title creator-card__name">{{ item.name }}</p>
        @if (item.statusLabel) {
          <span class="creator-card__status">{{ item.statusLabel }}</span>
        }
      </div>
      <p class="creator-card__specialty">{{ item.specialty }} \xB7 {{ item.category }}</p>
      <p class="creator-card__followers">{{ item.followersLabel }}</p>
    </div>
  </div>

  <p class="creator-card__tagline">{{ item.tagline }}</p>
  <p class="creator-card__bio">{{ item.bio }}</p>

  <div class="creator-card__preview-grid">
    @for (thumbnail of item.sampleThumbnails; track thumbnail) {
      <img
        [src]="thumbnail"
        [alt]="item.name + ' preview'"
        loading="lazy"
        decoding="async"
        referrerpolicy="no-referrer" />
    }
  </div>

  <div class="creator-card__footer">
    <p class="creator-card__highlight">{{ item.recentHighlight }}</p>

    <div class="creator-card__actions">
      <button type="button" class="creator-card__follow">Follow</button>
      <button type="button" class="creator-card__ghost">Preview</button>
    </div>
  </div>
</article>
`, styles: ['/* src/app/shared/creator-card/creator-card.component.scss */\n:host {\n  display: block;\n}\n.creator-card {\n  padding: 1rem;\n  display: grid;\n  gap: 0.9rem;\n  min-block-size: 100%;\n}\n.creator-card__top {\n  display: grid;\n  grid-template-columns: 3.25rem 1fr;\n  gap: 0.85rem;\n  align-items: center;\n}\n.creator-card__avatar {\n  inline-size: 3.25rem;\n  block-size: 3.25rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.creator-card__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  flex-wrap: wrap;\n}\n.creator-card__name,\n.creator-card__specialty,\n.creator-card__followers,\n.creator-card__tagline,\n.creator-card__bio,\n.creator-card__highlight {\n  margin: 0;\n}\n.creator-card__name {\n  font-size: 1.1rem;\n}\n.creator-card__status {\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-pill);\n  background: rgba(76, 214, 251, 0.12);\n  color: var(--color-tertiary);\n  font: 700 0.68rem/1 "Inter", sans-serif;\n  text-transform: uppercase;\n}\n.creator-card__specialty,\n.creator-card__followers,\n.creator-card__bio {\n  color: var(--color-on-surface-variant);\n  line-height: 1.5;\n}\n.creator-card__tagline {\n  font-weight: 700;\n}\n.creator-card__preview-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n}\n.creator-card__preview-grid img {\n  inline-size: 100%;\n  aspect-ratio: 1.15;\n  object-fit: cover;\n  border-radius: var(--radius-md);\n}\n.creator-card__footer {\n  display: grid;\n  gap: 0.85rem;\n  margin-top: auto;\n}\n.creator-card__highlight {\n  color: var(--color-secondary);\n}\n.creator-card__actions {\n  display: flex;\n  gap: 0.6rem;\n}\n.creator-card__follow,\n.creator-card__ghost {\n  min-block-size: 2.6rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  font-weight: 800;\n}\n.creator-card__follow {\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.creator-card__ghost {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface);\n}\n/*# sourceMappingURL=creator-card.component.css.map */\n'] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatorCardComponent, { className: "CreatorCardComponent", filePath: "src/app/shared/creator-card/creator-card.component.ts", lineNumber: 11 });
})();

// src/app/features/creator/pages/creator-explore-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CreatorExplorePageComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CreatorExplorePageComponent_For_13_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("creator-page__chip--active", ctx_r2.selectedCategory() === category_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function CreatorExplorePageComponent_Conditional_22_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-creator-card", 17);
  }
  if (rf & 2) {
    const creator_r4 = ctx.$implicit;
    \u0275\u0275property("item", creator_r4);
  }
}
function CreatorExplorePageComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "app-section-header", 15);
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275repeaterCreate(3, CreatorExplorePageComponent_Conditional_22_For_4_Template, 1, 1, "app-creator-card", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.featuredCreators());
  }
}
function CreatorExplorePageComponent_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-creator-card", 17);
  }
  if (rf & 2) {
    const creator_r5 = ctx.$implicit;
    \u0275\u0275property("item", creator_r5);
  }
}
function CreatorExplorePageComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "app-section-header", 18);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275repeaterCreate(3, CreatorExplorePageComponent_Conditional_23_For_4_Template, 1, 1, "app-creator-card", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.risingCreators());
  }
}
function CreatorExplorePageComponent_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-creator-card", 17);
  }
  if (rf & 2) {
    const creator_r6 = ctx.$implicit;
    \u0275\u0275property("item", creator_r6);
  }
}
function CreatorExplorePageComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CreatorExplorePageComponent_Conditional_26_For_2_Template, 1, 1, "app-creator-card", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredCreators());
  }
}
function CreatorExplorePageComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "span", 19);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 9);
    \u0275\u0275text(4, "No creators in this category yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try another creative discipline to keep discovering new voices.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function CreatorExplorePageComponent_Conditional_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCategory("All"));
    });
    \u0275\u0275text(8, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
var _CreatorExplorePageComponent = class _CreatorExplorePageComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.content = inject(CreatorContentService);
    this.layout = inject(LayoutService);
    this.selectedCategory = signal("All", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
    this.categories = ["All", "Documentary", "Architecture", "Cinematography", "Experimental", "Nature"];
    this.featuredCreators = computed(() => this.content.creatorDiscoveries().filter((creator) => creator.statusLabel === "Featured"), ...ngDevMode ? [{ debugName: "featuredCreators" }] : []);
    this.risingCreators = computed(() => this.filterCreators(this.content.creatorDiscoveries().filter((creator) => creator.statusLabel === "Rising")), ...ngDevMode ? [{ debugName: "risingCreators" }] : []);
    this.filteredCreators = computed(() => this.filterCreators(this.content.creatorDiscoveries()), ...ngDevMode ? [{ debugName: "filteredCreators" }] : []);
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  setCategory(category) {
    this.selectedCategory.set(category);
  }
  filterCreators(items) {
    if (this.selectedCategory() === "All") {
      return items;
    }
    return items.filter((creator) => creator.category === this.selectedCategory());
  }
};
_CreatorExplorePageComponent.\u0275fac = function CreatorExplorePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatorExplorePageComponent)();
};
_CreatorExplorePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatorExplorePageComponent, selectors: [["app-creator-explore-page"]], hostBindings: function CreatorExplorePageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function CreatorExplorePageComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 30, vars: 7, consts: [[1, "creator-page"], [1, "creator-page__header"], [1, "creator-page__eyebrow", "text-label"], [1, "page-title", "creator-page__title"], [1, "creator-page__subtitle"], [1, "creator-page__chips"], ["type", "button", 1, "creator-page__chip", 3, "creator-page__chip--active"], [1, "creator-page__hero", "surface-card"], [1, "text-label"], [1, "card-title"], [1, "creator-page__section"], ["title", "Browse By Craft", "accent", "tertiary"], [1, "creator-page__grid"], [1, "creator-page__empty", "surface-card"], ["type", "button", 1, "creator-page__chip", 3, "click"], ["title", "Featured Creators", "accent", "primary"], [1, "creator-page__grid", "creator-page__grid--featured"], [3, "item"], ["title", "Rising Creators", "accent", "secondary"], [1, "material-symbols-outlined"], ["type", "button", 1, "creator-page__reset", 3, "click"]], template: function CreatorExplorePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-top-navbar")(1, "app-side-nav");
    \u0275\u0275elementStart(2, "main", 0)(3, "header", 1)(4, "div")(5, "p", 2);
    \u0275\u0275text(6, "Creators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 3);
    \u0275\u0275text(8, "Find voices worth following");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 4);
    \u0275\u0275text(10, " Explore creators by identity, style, and discipline. This is where you evaluate people to follow, not just isolated videos to watch. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275repeaterCreate(12, CreatorExplorePageComponent_For_13_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "section", 7)(15, "div")(16, "p", 8);
    \u0275\u0275text(17, "Creator-first discovery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2", 9);
    \u0275\u0275text(19, "Preview the craft, understand the voice, then decide who deserves a follow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, " Each card highlights the creator\u2019s style, category, recent activity, and sample work so discovery feels relational instead of random. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, CreatorExplorePageComponent_Conditional_22_Template, 5, 0, "section", 10);
    \u0275\u0275conditionalCreate(23, CreatorExplorePageComponent_Conditional_23_Template, 5, 0, "section", 10);
    \u0275\u0275elementStart(24, "section", 10);
    \u0275\u0275element(25, "app-section-header", 11);
    \u0275\u0275conditionalCreate(26, CreatorExplorePageComponent_Conditional_26_Template, 3, 0, "div", 12)(27, CreatorExplorePageComponent_Conditional_27_Template, 9, 0, "section", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "app-floating-action-button")(29, "app-mobile-nav");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("creator-page--collapsed", ctx.layout.sidebarCollapsed())("creator-page--mobile", ctx.layout.isMobile());
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.categories);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx.featuredCreators().length > 0 && ctx.selectedCategory() === "All" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.risingCreators().length > 0 && ctx.selectedCategory() === "All" ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.filteredCreators().length > 0 ? 26 : 27);
  }
}, dependencies: [
  CreatorCardComponent,
  FloatingActionButtonComponent,
  MobileNavComponent,
  SectionHeaderComponent,
  SideNavComponent,
  TopNavbarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.creator-page[_ngcontent-%COMP%] {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.creator-page--collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.creator-page--mobile[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.creator-page__header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  display: grid;\n  gap: 1rem;\n}\n.creator-page__eyebrow[_ngcontent-%COMP%], \n.creator-page__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.creator-page__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n}\n.creator-page__title[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.25rem, 5vw, 3.6rem);\n}\n.creator-page__subtitle[_ngcontent-%COMP%], \n.creator-page__hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, \n.creator-page__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.creator-page__chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.creator-page__chip[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface-variant);\n  font-weight: 700;\n}\n.creator-page__chip--active[_ngcontent-%COMP%] {\n  background: rgba(0, 242, 209, 0.12);\n  color: var(--color-secondary);\n}\n.creator-page__hero[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  padding: 1.5rem;\n}\n.creator-page__hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.creator-page__hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.creator-page__empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.creator-page__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.creator-page__hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(76, 214, 251, 0.12),\n      transparent 30%),\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      rgba(255, 255, 255, 0.01));\n}\n.creator-page__section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.creator-page__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n.creator-page__grid--featured[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.creator-page__empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: grid;\n  justify-items: start;\n  gap: 0.75rem;\n}\n.creator-page__empty[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 2rem;\n}\n.creator-page__reset[_ngcontent-%COMP%] {\n  min-block-size: 2.8rem;\n  padding-inline: 1rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n  font-weight: 800;\n}\n@media (max-width: 1199px) {\n  .creator-page__grid[_ngcontent-%COMP%], \n   .creator-page__grid--featured[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 767px) {\n  .creator-page[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .creator-page__grid[_ngcontent-%COMP%], \n   .creator-page__grid--featured[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=creator-explore-page.component.css.map */"], changeDetection: 0 });
var CreatorExplorePageComponent = _CreatorExplorePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatorExplorePageComponent, [{
    type: Component,
    args: [{ selector: "app-creator-explore-page", standalone: true, imports: [
      CreatorCardComponent,
      FloatingActionButtonComponent,
      MobileNavComponent,
      SectionHeaderComponent,
      SideNavComponent,
      TopNavbarComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-top-navbar></app-top-navbar>
<app-side-nav></app-side-nav>

<main
  class="creator-page"
  [class.creator-page--collapsed]="layout.sidebarCollapsed()"
  [class.creator-page--mobile]="layout.isMobile()">
  <header class="creator-page__header">
    <div>
      <p class="creator-page__eyebrow text-label">Creators</p>
      <h1 class="page-title creator-page__title">Find voices worth following</h1>
      <p class="creator-page__subtitle">
        Explore creators by identity, style, and discipline. This is where you evaluate people to follow,
        not just isolated videos to watch.
      </p>
    </div>

    <div class="creator-page__chips">
      @for (category of categories; track category) {
        <button
          type="button"
          class="creator-page__chip"
          [class.creator-page__chip--active]="selectedCategory() === category"
          (click)="setCategory(category)">
          {{ category }}
        </button>
      }
    </div>
  </header>

  <section class="creator-page__hero surface-card">
    <div>
      <p class="text-label">Creator-first discovery</p>
      <h2 class="card-title">Preview the craft, understand the voice, then decide who deserves a follow</h2>
      <p>
        Each card highlights the creator\u2019s style, category, recent activity, and sample work so discovery feels relational instead of random.
      </p>
    </div>
  </section>

  @if (featuredCreators().length > 0 && selectedCategory() === 'All') {
    <section class="creator-page__section">
      <app-section-header title="Featured Creators" accent="primary"></app-section-header>
      <div class="creator-page__grid creator-page__grid--featured">
        @for (creator of featuredCreators(); track creator.id) {
          <app-creator-card [item]="creator"></app-creator-card>
        }
      </div>
    </section>
  }

  @if (risingCreators().length > 0 && selectedCategory() === 'All') {
    <section class="creator-page__section">
      <app-section-header title="Rising Creators" accent="secondary"></app-section-header>
      <div class="creator-page__grid">
        @for (creator of risingCreators(); track creator.id) {
          <app-creator-card [item]="creator"></app-creator-card>
        }
      </div>
    </section>
  }

  <section class="creator-page__section">
    <app-section-header title="Browse By Craft" accent="tertiary"></app-section-header>

    @if (filteredCreators().length > 0) {
      <div class="creator-page__grid">
        @for (creator of filteredCreators(); track creator.id) {
          <app-creator-card [item]="creator"></app-creator-card>
        }
      </div>
    } @else {
      <section class="creator-page__empty surface-card">
        <span class="material-symbols-outlined">groups</span>
        <h2 class="card-title">No creators in this category yet</h2>
        <p>Try another creative discipline to keep discovering new voices.</p>
        <button type="button" class="creator-page__reset" (click)="setCategory('All')">Reset filters</button>
      </section>
    }
  </section>
</main>

<app-floating-action-button></app-floating-action-button>
<app-mobile-nav></app-mobile-nav>
`, styles: ["/* src/app/features/creator/pages/creator-explore-page.component.scss */\n:host {\n  display: block;\n}\n.creator-page {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.creator-page--collapsed {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.creator-page--mobile {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.creator-page__header {\n  margin-bottom: 2rem;\n  display: grid;\n  gap: 1rem;\n}\n.creator-page__eyebrow,\n.creator-page__subtitle {\n  margin: 0;\n}\n.creator-page__eyebrow {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n}\n.creator-page__title {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.25rem, 5vw, 3.6rem);\n}\n.creator-page__subtitle,\n.creator-page__hero p:last-child,\n.creator-page__empty p {\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.creator-page__chips {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.creator-page__chip {\n  min-block-size: 2.5rem;\n  padding-inline: 0.9rem;\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-on-surface-variant);\n  font-weight: 700;\n}\n.creator-page__chip--active {\n  background: rgba(0, 242, 209, 0.12);\n  color: var(--color-secondary);\n}\n.creator-page__hero {\n  margin-bottom: 3rem;\n  padding: 1.5rem;\n}\n.creator-page__hero p,\n.creator-page__hero h2,\n.creator-page__empty h2,\n.creator-page__empty p {\n  margin: 0;\n}\n.creator-page__hero {\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(76, 214, 251, 0.12),\n      transparent 30%),\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      rgba(255, 255, 255, 0.01));\n}\n.creator-page__section {\n  margin-bottom: 3rem;\n}\n.creator-page__grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.25rem;\n}\n.creator-page__grid--featured {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.creator-page__empty {\n  padding: 2rem;\n  display: grid;\n  justify-items: start;\n  gap: 0.75rem;\n}\n.creator-page__empty .material-symbols-outlined {\n  color: var(--color-primary);\n  font-size: 2rem;\n}\n.creator-page__reset {\n  min-block-size: 2.8rem;\n  padding-inline: 1rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n  font-weight: 800;\n}\n@media (max-width: 1199px) {\n  .creator-page__grid,\n  .creator-page__grid--featured {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 767px) {\n  .creator-page {\n    margin-inline-start: 0;\n  }\n  .creator-page__grid,\n  .creator-page__grid--featured {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=creator-explore-page.component.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatorExplorePageComponent, { className: "CreatorExplorePageComponent", filePath: "src/app/features/creator/pages/creator-explore-page.component.ts", lineNumber: 35 });
})();
export {
  CreatorExplorePageComponent
};
//# sourceMappingURL=chunk-QESXCOER.js.map
