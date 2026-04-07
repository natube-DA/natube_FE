import {
  AuthModalService,
  AuthService,
  LanguageService,
  TranslatePipe
} from "./chunk-HALBEQZX.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VWYUV7GB.js";

// src/app/core/services/layout.service.ts
var _LayoutService = class _LayoutService {
  constructor() {
    this.mobileBreakpoint = 768;
    this.viewportWidth = signal(1280, ...ngDevMode ? [{ debugName: "viewportWidth" }] : []);
    this.sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
    this.isMobile = computed(() => this.viewportWidth() < this.mobileBreakpoint, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  }
  setViewportWidth(width) {
    this.viewportWidth.set(width);
    if (this.isMobile()) {
      this.sidebarCollapsed.set(true);
      return;
    }
    if (width >= this.mobileBreakpoint && this.sidebarCollapsed() && width > 1280) {
      this.sidebarCollapsed.set(false);
    }
  }
  toggleSidebar() {
    if (this.isMobile()) {
      return;
    }
    this.sidebarCollapsed.update((value) => !value);
  }
};
_LayoutService.\u0275fac = function LayoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutService)();
};
_LayoutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
var LayoutService = _LayoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/layout/floating-action-button/floating-action-button.component.ts
var _FloatingActionButtonComponent = class _FloatingActionButtonComponent {
  constructor() {
    this.router = inject(Router);
    this.authModal = inject(AuthModalService);
    this.auth = inject(AuthService);
  }
  handleUploadClick() {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: "upload",
        title: "Sign in to upload your first video",
        description: "Join Cinematic Curator to publish videos, build your channel, and unlock creator tools.",
        redirectUrl: "/upload",
        preferredMode: "signin"
      };
      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }
    this.auth.enableCreatorMode();
    void this.router.navigateByUrl("/upload");
  }
};
_FloatingActionButtonComponent.\u0275fac = function FloatingActionButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatingActionButtonComponent)();
};
_FloatingActionButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloatingActionButtonComponent, selectors: [["app-floating-action-button"]], decls: 3, vars: 0, consts: [["type", "button", "aria-label", "Upload new content", 1, "floating-action-button", 3, "click"], [1, "material-symbols-outlined"]], template: function FloatingActionButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 0);
    \u0275\u0275domListener("click", function FloatingActionButtonComponent_Template_button_click_0_listener() {
      return ctx.handleUploadClick();
    });
    \u0275\u0275domElementStart(1, "span", 1);
    \u0275\u0275text(2, "add");
    \u0275\u0275domElementEnd()();
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.floating-action-button[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-inline-end: 2rem;\n  inset-block-end: 2rem;\n  z-index: 45;\n  inline-size: 3.5rem;\n  block-size: 3.5rem;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--color-primary-container);\n  color: var(--color-on-primary-container);\n  box-shadow: var(--shadow-fab);\n  transition: transform 180ms ease;\n}\n.floating-action-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n@media (max-width: 767px) {\n  .floating-action-button[_ngcontent-%COMP%] {\n    inset-inline-end: 1rem;\n    inset-block-end: 5rem;\n  }\n}\n/*# sourceMappingURL=floating-action-button.component.css.map */"], changeDetection: 0 });
var FloatingActionButtonComponent = _FloatingActionButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{ selector: "app-floating-action-button", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n  type="button"\n  class="floating-action-button"\n  aria-label="Upload new content"\n  (click)="handleUploadClick()">\n  <span class="material-symbols-outlined">add</span>\n</button>\n', styles: ["/* src/app/layout/floating-action-button/floating-action-button.component.scss */\n:host {\n  display: block;\n}\n.floating-action-button {\n  position: fixed;\n  inset-inline-end: 2rem;\n  inset-block-end: 2rem;\n  z-index: 45;\n  inline-size: 3.5rem;\n  block-size: 3.5rem;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--color-primary-container);\n  color: var(--color-on-primary-container);\n  box-shadow: var(--shadow-fab);\n  transition: transform 180ms ease;\n}\n.floating-action-button:hover {\n  transform: scale(1.06);\n}\n@media (max-width: 767px) {\n  .floating-action-button {\n    inset-inline-end: 1rem;\n    inset-block-end: 5rem;\n  }\n}\n/*# sourceMappingURL=floating-action-button.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatingActionButtonComponent, { className: "FloatingActionButtonComponent", filePath: "src/app/layout/floating-action-button/floating-action-button.component.ts", lineNumber: 14 });
})();

// src/app/layout/mobile-nav/mobile-nav.component.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.route;
function MobileNavComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.route !== "/creator"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var _MobileNavComponent = class _MobileNavComponent {
  constructor() {
    this.navItems = [
      { label: "Home", icon: "home", route: "/home" },
      { label: "Explora", icon: "explore", route: "/explore" },
      { label: "Creators", icon: "movie_filter", route: "/creator" },
      { label: "Profile", icon: "person", route: "/profile" }
    ];
  }
};
_MobileNavComponent.\u0275fac = function MobileNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MobileNavComponent)();
};
_MobileNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileNavComponent, selectors: [["app-mobile-nav"]], decls: 3, vars: 0, consts: [["aria-label", "Mobile navigation", 1, "mobile-nav"], ["routerLinkActive", "mobile-nav__item--active", 1, "mobile-nav__item", 3, "routerLink", "routerLinkActiveOptions"], [1, "material-symbols-outlined"], [1, "text-label"]], template: function MobileNavComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0);
    \u0275\u0275repeaterCreate(1, MobileNavComponent_For_2_Template, 5, 6, "a", 1, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.navItems);
  }
}, dependencies: [RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-inline: 0;\n  inset-block-end: 0;\n  z-index: 50;\n  display: none;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  min-block-size: 4rem;\n  padding-inline: 0.5rem;\n  background: var(--color-surface-container-low);\n  border-block-start: 1px solid rgba(172, 135, 143, 0.12);\n}\n.mobile-nav__item[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: 0.15rem;\n  color: rgba(229, 226, 225, 0.7);\n  padding-block: 0.35rem;\n}\n.mobile-nav__item--active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.mobile-nav__item[_ngcontent-%COMP%]   .text-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n@media (max-width: 767px) {\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=mobile-nav.component.css.map */"], changeDetection: 0 });
var MobileNavComponent = _MobileNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavComponent, [{
    type: Component,
    args: [{ selector: "app-mobile-nav", standalone: true, imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `<nav class="mobile-nav" aria-label="Mobile navigation">
  @for (item of navItems; track item.route) {
    <a
      class="mobile-nav__item"
      [routerLink]="item.route"
      routerLinkActive="mobile-nav__item--active"
      [routerLinkActiveOptions]="{ exact: item.route !== '/creator' }"
    >
      <span class="material-symbols-outlined">{{ item.icon }}</span>
      <span class="text-label">{{ item.label }}</span>
    </a>
  }
</nav>
`, styles: ["/* src/app/layout/mobile-nav/mobile-nav.component.scss */\n:host {\n  display: block;\n}\n.mobile-nav {\n  position: fixed;\n  inset-inline: 0;\n  inset-block-end: 0;\n  z-index: 50;\n  display: none;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  min-block-size: 4rem;\n  padding-inline: 0.5rem;\n  background: var(--color-surface-container-low);\n  border-block-start: 1px solid rgba(172, 135, 143, 0.12);\n}\n.mobile-nav__item {\n  display: grid;\n  justify-items: center;\n  gap: 0.15rem;\n  color: rgba(229, 226, 225, 0.7);\n  padding-block: 0.35rem;\n}\n.mobile-nav__item--active {\n  color: var(--color-primary);\n}\n.mobile-nav__item .text-label {\n  font-size: 0.65rem;\n}\n@media (max-width: 767px) {\n  .mobile-nav {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=mobile-nav.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileNavComponent, { className: "MobileNavComponent", filePath: "src/app/layout/mobile-nav/mobile-nav.component.ts", lineNumber: 13 });
})();

// src/app/layout/side-nav/side-nav.component.ts
var _c02 = (a0) => ({ exact: a0 });
var _forTrack02 = ($index, $item) => $item.route;
function SideNavComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c02, item_r1.route !== "/creator"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var _SideNavComponent = class _SideNavComponent {
  constructor() {
    this.layout = inject(LayoutService);
    this.navItems = [
      { label: "Home", icon: "home", route: "/home" },
      { label: "Explora", icon: "explore", route: "/explore" },
      { label: "Creators", icon: "movie_filter", route: "/creator" }
    ];
  }
};
_SideNavComponent.\u0275fac = function SideNavComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SideNavComponent)();
};
_SideNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], decls: 16, vars: 3, consts: [[1, "side-nav"], [1, "side-nav__header"], [1, "side-nav__title"], [1, "side-nav__subtitle"], ["aria-label", "Primary navigation", 1, "side-nav__menu"], ["routerLinkActive", "side-nav__item--active", 1, "side-nav__item", 3, "routerLink", "routerLinkActiveOptions"], [1, "side-nav__promo", "surface-card"], [1, "side-nav__promo-label"], [1, "side-nav__progress"], [1, "side-nav__progress-fill"], ["type", "button", 1, "side-nav__promo-action"], [1, "material-symbols-outlined"], [1, "nav-label"]], template: function SideNavComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Your Collection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "nav", 4);
    \u0275\u0275repeaterCreate(7, SideNavComponent_For_8_Template, 5, 6, "a", 5, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
    \u0275\u0275text(11, "PRO PLAN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275element(13, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275text(15, "Upgrade Now");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("side-nav--collapsed", ctx.layout.sidebarCollapsed());
    \u0275\u0275attribute("aria-hidden", ctx.layout.isMobile());
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.navItems);
  }
}, dependencies: [RouterLink, RouterLinkActive], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.side-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  z-index: 40;\n  inline-size: var(--sidebar-width);\n  block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 1rem) 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  background: var(--color-surface-container-low);\n  border-inline-end: 1px solid rgba(172, 135, 143, 0.12);\n  transition: inline-size 240ms ease;\n}\n.side-nav--collapsed[_ngcontent-%COMP%] {\n  inline-size: var(--sidebar-collapsed-width);\n}\n.side-nav--collapsed[_ngcontent-%COMP%]   .side-nav__title[_ngcontent-%COMP%], \n.side-nav--collapsed[_ngcontent-%COMP%]   .side-nav__subtitle[_ngcontent-%COMP%], \n.side-nav--collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.side-nav--collapsed[_ngcontent-%COMP%]   .side-nav__promo[_ngcontent-%COMP%] {\n  display: none;\n}\n.side-nav__header[_ngcontent-%COMP%] {\n  padding-inline: 0.5rem;\n}\n.side-nav__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-primary);\n  font: 800 1.15rem/1.2 "Plus Jakarta Sans", sans-serif;\n  letter-spacing: -0.03em;\n}\n.side-nav__subtitle[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: rgba(229, 188, 197, 0.75);\n  font: 600 0.7rem/1.2 "Inter", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.side-nav__menu[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.side-nav__item[_ngcontent-%COMP%] {\n  min-block-size: 3rem;\n  padding-inline: 1rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  color: rgba(229, 226, 225, 0.82);\n  transition: background-color 180ms ease, color 180ms ease;\n}\n.side-nav__item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--color-secondary);\n}\n.side-nav__item--active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-primary);\n  border-inline-start: 4px solid var(--color-primary-container);\n}\n.side-nav--collapsed[_ngcontent-%COMP%]   .side-nav__item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-inline: 0;\n}\n.side-nav__promo[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 1rem;\n}\n.side-nav__promo-label[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: rgba(229, 188, 197, 0.75);\n  font: 700 0.7rem/1 "Inter", sans-serif;\n  letter-spacing: 0.12em;\n}\n.side-nav__progress[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 0.35rem;\n  background: var(--color-surface-container-highest);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n  margin-bottom: 0.85rem;\n}\n.side-nav__progress-fill[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 66%;\n  block-size: 100%;\n  background: var(--color-tertiary);\n}\n.side-nav__promo-action[_ngcontent-%COMP%] {\n  padding: 0;\n  color: var(--color-tertiary);\n  font: 700 0.8rem/1 "Inter", sans-serif;\n}\n@media (max-width: 767px) {\n  .side-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */'], changeDetection: 0 });
var SideNavComponent = _SideNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavComponent, [{
    type: Component,
    args: [{ selector: "app-side-nav", standalone: true, imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `<aside
  class="side-nav"
  [class.side-nav--collapsed]="layout.sidebarCollapsed()"
  [attr.aria-hidden]="layout.isMobile()"
>
  <div class="side-nav__header">
    <h2 class="side-nav__title">Library</h2>
    <p class="side-nav__subtitle">Your Collection</p>
  </div>

  <nav class="side-nav__menu" aria-label="Primary navigation">
    @for (item of navItems; track item.route) {
      <a
        class="side-nav__item"
        [routerLink]="item.route"
        routerLinkActive="side-nav__item--active"
        [routerLinkActiveOptions]="{ exact: item.route !== '/creator' }"
      >
        <span class="material-symbols-outlined">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </a>
    }
  </nav>

  <div class="side-nav__promo surface-card">
    <p class="side-nav__promo-label">PRO PLAN</p>
    <div class="side-nav__progress">
      <span class="side-nav__progress-fill"></span>
    </div>
    <button type="button" class="side-nav__promo-action">Upgrade Now</button>
  </div>
</aside>
`, styles: ['/* src/app/layout/side-nav/side-nav.component.scss */\n:host {\n  display: block;\n}\n.side-nav {\n  position: fixed;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  z-index: 40;\n  inline-size: var(--sidebar-width);\n  block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 1rem) 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  background: var(--color-surface-container-low);\n  border-inline-end: 1px solid rgba(172, 135, 143, 0.12);\n  transition: inline-size 240ms ease;\n}\n.side-nav--collapsed {\n  inline-size: var(--sidebar-collapsed-width);\n}\n.side-nav--collapsed .side-nav__title,\n.side-nav--collapsed .side-nav__subtitle,\n.side-nav--collapsed .nav-label,\n.side-nav--collapsed .side-nav__promo {\n  display: none;\n}\n.side-nav__header {\n  padding-inline: 0.5rem;\n}\n.side-nav__title {\n  margin: 0;\n  color: var(--color-primary);\n  font: 800 1.15rem/1.2 "Plus Jakarta Sans", sans-serif;\n  letter-spacing: -0.03em;\n}\n.side-nav__subtitle {\n  margin: 0.35rem 0 0;\n  color: rgba(229, 188, 197, 0.75);\n  font: 600 0.7rem/1.2 "Inter", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.side-nav__menu {\n  display: grid;\n  gap: 0.5rem;\n}\n.side-nav__item {\n  min-block-size: 3rem;\n  padding-inline: 1rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  color: rgba(229, 226, 225, 0.82);\n  transition: background-color 180ms ease, color 180ms ease;\n}\n.side-nav__item:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--color-secondary);\n}\n.side-nav__item--active {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-primary);\n  border-inline-start: 4px solid var(--color-primary-container);\n}\n.side-nav--collapsed .side-nav__item {\n  justify-content: center;\n  padding-inline: 0;\n}\n.side-nav__promo {\n  margin-top: auto;\n  padding: 1rem;\n}\n.side-nav__promo-label {\n  margin: 0 0 0.75rem;\n  color: rgba(229, 188, 197, 0.75);\n  font: 700 0.7rem/1 "Inter", sans-serif;\n  letter-spacing: 0.12em;\n}\n.side-nav__progress {\n  inline-size: 100%;\n  block-size: 0.35rem;\n  background: var(--color-surface-container-highest);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n  margin-bottom: 0.85rem;\n}\n.side-nav__progress-fill {\n  display: block;\n  inline-size: 66%;\n  block-size: 100%;\n  background: var(--color-tertiary);\n}\n.side-nav__promo-action {\n  padding: 0;\n  color: var(--color-tertiary);\n  font: 700 0.8rem/1 "Inter", sans-serif;\n}\n@media (max-width: 767px) {\n  .side-nav {\n    display: none;\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavComponent, { className: "SideNavComponent", filePath: "src/app/layout/side-nav/side-nav.component.ts", lineNumber: 14 });
})();

// src/app/core/services/search.service.ts
var _SearchService = class _SearchService {
  constructor() {
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  }
  updateQuery(value) {
    this.query.set(value.trimStart());
  }
  clear() {
    this.query.set("");
  }
};
_SearchService.\u0275fac = function SearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchService)();
};
_SearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
var SearchService = _SearchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/language-switcher/language-switcher.component.ts
var _forTrack03 = ($index, $item) => $item.code;
function LanguageSwitcherComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.language.getNativeLanguageName(ctx_r0.language.getCurrentLanguage()), " ");
  }
}
function LanguageSwitcherComponent_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1, "check");
    \u0275\u0275domElementEnd();
  }
}
function LanguageSwitcherComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function LanguageSwitcherComponent_Conditional_7_For_2_Template_button_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectLanguage(item_r3.code));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, LanguageSwitcherComponent_Conditional_7_For_2_Conditional_3_Template, 2, 0, "span", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("language-switcher__option--active", ctx_r0.language.getCurrentLanguage() === item_r3.code);
    \u0275\u0275attribute("aria-checked", ctx_r0.language.getCurrentLanguage() === item_r3.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.nativeName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.language.getCurrentLanguage() === item_r3.code ? 3 : -1);
  }
}
function LanguageSwitcherComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 5);
    \u0275\u0275repeaterCreate(1, LanguageSwitcherComponent_Conditional_7_For_2_Template, 4, 5, "button", 6, _forTrack03);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.language.supportedLanguages);
  }
}
var _LanguageSwitcherComponent = class _LanguageSwitcherComponent {
  constructor() {
    this.host = inject(ElementRef);
    this.language = inject(LanguageService);
    this.isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
    this.showLabel = true;
    this.compact = false;
  }
  toggle() {
    this.isOpen.update((value) => !value);
  }
  selectLanguage(code) {
    return __async(this, null, function* () {
      yield this.language.setLanguage(code);
      this.isOpen.set(false);
    });
  }
  onDocumentClick(event) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
};
_LanguageSwitcherComponent.\u0275fac = function LanguageSwitcherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageSwitcherComponent)();
};
_LanguageSwitcherComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSwitcherComponent, selectors: [["app-language-switcher"]], hostBindings: function LanguageSwitcherComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function LanguageSwitcherComponent_click_HostBindingHandler($event) {
      return ctx.onDocumentClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, inputs: { showLabel: "showLabel", compact: "compact" }, decls: 8, vars: 5, consts: [[1, "language-switcher"], ["type", "button", "aria-haspopup", "menu", "aria-label", "Select language", 1, "language-switcher__trigger", 3, "click"], ["aria-hidden", "true", 1, "language-switcher__icon"], [1, "language-switcher__label"], ["aria-hidden", "true", 1, "material-symbols-outlined", "language-switcher__caret"], ["role", "menu", "aria-label", "Language menu", 1, "language-switcher__menu", "surface-card"], ["type", "button", "role", "menuitemradio", 1, "language-switcher__option", 3, "language-switcher__option--active"], ["type", "button", "role", "menuitemradio", 1, "language-switcher__option", 3, "click"], ["aria-hidden", "true", 1, "material-symbols-outlined", "language-switcher__check"]], template: function LanguageSwitcherComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275domListener("click", function LanguageSwitcherComponent_Template_button_click_1_listener() {
      return ctx.toggle();
    });
    \u0275\u0275domElementStart(2, "span", 2);
    \u0275\u0275text(3, "\u{1F310}");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, LanguageSwitcherComponent_Conditional_4_Template, 2, 1, "span", 3);
    \u0275\u0275domElementStart(5, "span", 4);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(7, LanguageSwitcherComponent_Conditional_7_Template, 3, 0, "section", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("language-switcher--compact", ctx.compact);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx.isOpen());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showLabel ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isOpen() ? 7 : -1);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.language-switcher[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-switcher__trigger[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem 0.85rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--color-on-surface);\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.language-switcher__trigger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.language-switcher__trigger[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.language-switcher__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n}\n.language-switcher__label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.language-switcher__caret[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-on-surface-variant);\n}\n.language-switcher__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  inset-block-start: calc(100% + 0.5rem);\n  z-index: 20;\n  min-inline-size: 13rem;\n  padding: 0.45rem;\n}\n.language-switcher__option[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-on-surface);\n  text-align: left;\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.language-switcher__option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.language-switcher__option[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.language-switcher__option--active[_ngcontent-%COMP%] {\n  color: var(--color-tertiary);\n  font-weight: 800;\n}\n.language-switcher__check[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.language-switcher--compact[_ngcontent-%COMP%]   .language-switcher__trigger[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .language-switcher__menu[_ngcontent-%COMP%] {\n    position: absolute;\n    inset-inline: 0;\n    min-inline-size: auto;\n  }\n}\n/*# sourceMappingURL=language-switcher.component.css.map */"], changeDetection: 0 });
var LanguageSwitcherComponent = _LanguageSwitcherComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSwitcherComponent, [{
    type: Component,
    args: [{ selector: "app-language-switcher", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="language-switcher" [class.language-switcher--compact]="compact">\n  <button\n    type="button"\n    class="language-switcher__trigger"\n    [attr.aria-expanded]="isOpen()"\n    aria-haspopup="menu"\n    aria-label="Select language"\n    (click)="toggle()">\n    <span class="language-switcher__icon" aria-hidden="true">\u{1F310}</span>\n    @if (showLabel) {\n      <span class="language-switcher__label">\n        {{ language.getNativeLanguageName(language.getCurrentLanguage()) }}\n      </span>\n    }\n    <span class="material-symbols-outlined language-switcher__caret" aria-hidden="true">expand_more</span>\n  </button>\n\n  @if (isOpen()) {\n    <section class="language-switcher__menu surface-card" role="menu" aria-label="Language menu">\n      @for (item of language.supportedLanguages; track item.code) {\n        <button\n          type="button"\n          role="menuitemradio"\n          class="language-switcher__option"\n          [class.language-switcher__option--active]="language.getCurrentLanguage() === item.code"\n          [attr.aria-checked]="language.getCurrentLanguage() === item.code"\n          (click)="selectLanguage(item.code)">\n          <span>{{ item.nativeName }}</span>\n          @if (language.getCurrentLanguage() === item.code) {\n            <span class="material-symbols-outlined language-switcher__check" aria-hidden="true">check</span>\n          }\n        </button>\n      }\n    </section>\n  }\n</div>\n', styles: ["/* src/app/shared/language-switcher/language-switcher.component.scss */\n:host {\n  display: block;\n}\n.language-switcher {\n  position: relative;\n}\n.language-switcher__trigger {\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem 0.85rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--color-on-surface);\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.language-switcher__trigger:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.language-switcher__trigger:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.language-switcher__icon {\n  font-size: 1rem;\n  line-height: 1;\n}\n.language-switcher__label {\n  font-weight: 700;\n}\n.language-switcher__caret {\n  font-size: 1.1rem;\n  color: var(--color-on-surface-variant);\n}\n.language-switcher__menu {\n  position: absolute;\n  inset-inline-end: 0;\n  inset-block-start: calc(100% + 0.5rem);\n  z-index: 20;\n  min-inline-size: 13rem;\n  padding: 0.45rem;\n}\n.language-switcher__option {\n  inline-size: 100%;\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-on-surface);\n  text-align: left;\n  transition: background-color 160ms ease, color 160ms ease;\n}\n.language-switcher__option:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.language-switcher__option:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.language-switcher__option--active {\n  color: var(--color-tertiary);\n  font-weight: 800;\n}\n.language-switcher__check {\n  font-size: 1rem;\n}\n.language-switcher--compact .language-switcher__trigger {\n  inline-size: 100%;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .language-switcher__menu {\n    position: absolute;\n    inset-inline: 0;\n    min-inline-size: auto;\n  }\n}\n/*# sourceMappingURL=language-switcher.component.css.map */\n"] }]
  }], null, { showLabel: [{
    type: Input
  }], compact: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSwitcherComponent, { className: "LanguageSwitcherComponent", filePath: "src/app/shared/language-switcher/language-switcher.component.ts", lineNumber: 19 });
})();

// src/app/features/user/components/user-dropdown/user-dropdown.component.ts
function UserDropdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementStart(2, "div")(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 5)(13, "p", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 7);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 7);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 7);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 5)(26, "p", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 8);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.upload.emit());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 8);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreatorMode.emit());
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 9);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 5)(41, "p", 6);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "app-language-switcher", 10);
    \u0275\u0275elementStart(45, "a", 7);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 7);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_a_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate());
    });
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 11);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_1_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logoutUser.emit());
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r3.avatarUrl, \u0275\u0275sanitizeUrl)("alt", user_r3.displayName + " avatar");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", user_r3.plan, " ", \u0275\u0275pipeBind1(9, 20, "dropdown.plan"), " \xB7 ", ctx_r1.auth.role() === "creator" ? \u0275\u0275pipeBind1(10, 22, "dropdown.creatorMode") : \u0275\u0275pipeBind1(11, 24, "dropdown.viewerMode"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "dropdown.content"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "dropdown.yourChannel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 30, "dropdown.yourVideos"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "dropdown.playlists"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 34, "dropdown.creator"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 36, "dropdown.uploadVideo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.auth.isCreator() ? ctx_r1.auth.role() === "creator" ? \u0275\u0275pipeBind1(34, 38, "dropdown.switchToViewer") : \u0275\u0275pipeBind1(35, 40, "dropdown.switchToCreator") : \u0275\u0275pipeBind1(36, 42, "dropdown.enableCreatorTools"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 44, "dropdown.creatorDashboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 46, "dropdown.account"));
    \u0275\u0275advance(2);
    \u0275\u0275property("compact", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 48, "dropdown.profileSettings"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 50, "dropdown.planBilling"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 52, "dropdown.signOut"), " ");
  }
}
var _UserDropdownComponent = class _UserDropdownComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.closeMenu = new EventEmitter();
    this.upload = new EventEmitter();
    this.toggleCreatorMode = new EventEmitter();
    this.logoutUser = new EventEmitter();
  }
  onNavigate() {
    this.closeMenu.emit();
  }
};
_UserDropdownComponent.\u0275fac = function UserDropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserDropdownComponent)();
};
_UserDropdownComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDropdownComponent, selectors: [["app-user-dropdown"]], outputs: { closeMenu: "closeMenu", upload: "upload", toggleCreatorMode: "toggleCreatorMode", logoutUser: "logoutUser" }, decls: 2, vars: 1, consts: [["aria-label", "User menu", 1, "user-dropdown", "surface-card"], [1, "user-dropdown__header"], [3, "src", "alt"], [1, "user-dropdown__name"], [1, "user-dropdown__meta"], [1, "user-dropdown__section"], [1, "user-dropdown__label", "text-label"], ["routerLink", "/profile", 3, "click"], ["type", "button", 3, "click"], ["routerLink", "/creator", 3, "click"], [3, "compact"], ["type", "button", 1, "user-dropdown__danger", 3, "click"]], template: function UserDropdownComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275conditionalCreate(1, UserDropdownComponent_Conditional_1_Template, 54, 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_0_0 = ctx.auth.user()) ? 1 : -1, tmp_0_0);
  }
}, dependencies: [RouterLink, LanguageSwitcherComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  inline-size: min(20rem, 100vw - 2rem);\n  padding: 1rem;\n  display: grid;\n  gap: 1rem;\n}\n.user-dropdown__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3rem 1fr;\n  gap: 0.85rem;\n  align-items: center;\n}\n.user-dropdown__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n}\n.user-dropdown__name[_ngcontent-%COMP%], \n.user-dropdown__meta[_ngcontent-%COMP%], \n.user-dropdown__label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.user-dropdown__name[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.user-dropdown__meta[_ngcontent-%COMP%] {\n  color: var(--color-on-surface-variant);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.user-dropdown__section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n.user-dropdown__label[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.user-dropdown__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.user-dropdown__section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  text-align: left;\n  color: var(--color-on-surface);\n}\n.user-dropdown__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.user-dropdown__section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.user-dropdown__danger[_ngcontent-%COMP%] {\n  color: var(--color-error);\n}\n.user-dropdown__section[_ngcontent-%COMP%]   app-language-switcher[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n}\n/*# sourceMappingURL=user-dropdown.component.css.map */"], changeDetection: 0 });
var UserDropdownComponent = _UserDropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-user-dropdown", standalone: true, imports: [RouterLink, LanguageSwitcherComponent, TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="user-dropdown surface-card" aria-label="User menu">
  @if (auth.user(); as user) {
    <header class="user-dropdown__header">
      <img [src]="user.avatarUrl" [alt]="user.displayName + ' avatar'" />

      <div>
        <p class="user-dropdown__name">{{ user.displayName }}</p>
        <p class="user-dropdown__meta">{{ user.email }}</p>
        <p class="user-dropdown__meta">
          {{ user.plan }} {{ 'dropdown.plan' | translate }} \xB7
          {{ auth.role() === 'creator' ? ('dropdown.creatorMode' | translate) : ('dropdown.viewerMode' | translate) }}
        </p>
      </div>
    </header>

    <div class="user-dropdown__section">
      <p class="user-dropdown__label text-label">{{ 'dropdown.content' | translate }}</p>
      <a routerLink="/profile" (click)="onNavigate()">{{ 'dropdown.yourChannel' | translate }}</a>
      <a routerLink="/profile" (click)="onNavigate()">{{ 'dropdown.yourVideos' | translate }}</a>
      <a routerLink="/profile" (click)="onNavigate()">{{ 'dropdown.playlists' | translate }}</a>
    </div>

    <div class="user-dropdown__section">
      <p class="user-dropdown__label text-label">{{ 'dropdown.creator' | translate }}</p>
      <button type="button" (click)="upload.emit()">{{ 'dropdown.uploadVideo' | translate }}</button>
      <button type="button" (click)="toggleCreatorMode.emit()">
        {{
          auth.isCreator()
            ? (auth.role() === 'creator'
              ? ('dropdown.switchToViewer' | translate)
              : ('dropdown.switchToCreator' | translate))
            : ('dropdown.enableCreatorTools' | translate)
        }}
      </button>
      <a routerLink="/creator" (click)="onNavigate()">{{ 'dropdown.creatorDashboard' | translate }}</a>
    </div>

    <div class="user-dropdown__section">
      <p class="user-dropdown__label text-label">{{ 'dropdown.account' | translate }}</p>
      <app-language-switcher [compact]="true"></app-language-switcher>
      <a routerLink="/profile" (click)="onNavigate()">{{ 'dropdown.profileSettings' | translate }}</a>
      <a routerLink="/profile" (click)="onNavigate()">{{ 'dropdown.planBilling' | translate }}</a>
      <button type="button" class="user-dropdown__danger" (click)="logoutUser.emit()">
        {{ 'dropdown.signOut' | translate }}
      </button>
    </div>
  }
</section>
`, styles: ["/* src/app/features/user/components/user-dropdown/user-dropdown.component.scss */\n:host {\n  display: block;\n}\n.user-dropdown {\n  inline-size: min(20rem, 100vw - 2rem);\n  padding: 1rem;\n  display: grid;\n  gap: 1rem;\n}\n.user-dropdown__header {\n  display: grid;\n  grid-template-columns: 3rem 1fr;\n  gap: 0.85rem;\n  align-items: center;\n}\n.user-dropdown__header img {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n}\n.user-dropdown__name,\n.user-dropdown__meta,\n.user-dropdown__label {\n  margin: 0;\n}\n.user-dropdown__name {\n  font-weight: 800;\n}\n.user-dropdown__meta {\n  color: var(--color-on-surface-variant);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.user-dropdown__section {\n  display: grid;\n  gap: 0.35rem;\n}\n.user-dropdown__label {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.user-dropdown__section a,\n.user-dropdown__section button {\n  min-block-size: 2.5rem;\n  padding-inline: 0.75rem;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  text-align: left;\n  color: var(--color-on-surface);\n}\n.user-dropdown__section a:hover,\n.user-dropdown__section button:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.user-dropdown__danger {\n  color: var(--color-error);\n}\n.user-dropdown__section app-language-switcher {\n  margin-top: 0.15rem;\n}\n/*# sourceMappingURL=user-dropdown.component.css.map */\n"] }]
  }], null, { closeMenu: [{
    type: Output
  }], upload: [{
    type: Output
  }], toggleCreatorMode: [{
    type: Output
  }], logoutUser: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDropdownComponent, { className: "UserDropdownComponent", filePath: "src/app/features/user/components/user-dropdown/user-dropdown.component.ts", lineNumber: 15 });
})();

// src/app/layout/top-navbar/top-navbar.component.ts
function TopNavbarComponent_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.auth.user()) == null ? null : tmp_2_0.unreadNotifications);
  }
}
function TopNavbarComponent_Conditional_14_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function TopNavbarComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "p", 18);
    \u0275\u0275text(2, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TopNavbarComponent_Conditional_14_Conditional_9_For_4_Template, 2, 1, "p", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.notifications);
  }
}
function TopNavbarComponent_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "app-user-dropdown", 20);
    \u0275\u0275listener("upload", function TopNavbarComponent_Conditional_14_Conditional_13_Template_app_user_dropdown_upload_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleUpload());
    })("toggleCreatorMode", function TopNavbarComponent_Conditional_14_Conditional_13_Template_app_user_dropdown_toggleCreatorMode_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCreatorMode());
    })("logoutUser", function TopNavbarComponent_Conditional_14_Conditional_13_Template_app_user_dropdown_logoutUser_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    })("closeMenu", function TopNavbarComponent_Conditional_14_Conditional_13_Template_app_user_dropdown_closeMenu_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeOverlays());
    });
    \u0275\u0275elementEnd()();
  }
}
function TopNavbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function TopNavbarComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleUpload());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "video_call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "button", 12);
    \u0275\u0275listener("click", function TopNavbarComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TopNavbarComponent_Conditional_14_Conditional_8_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, TopNavbarComponent_Conditional_14_Conditional_9_Template, 5, 0, "section", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11)(11, "button", 15);
    \u0275\u0275listener("click", function TopNavbarComponent_Conditional_14_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserMenu());
    });
    \u0275\u0275element(12, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TopNavbarComponent_Conditional_14_Conditional_13_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-expanded", ctx_r1.notificationsOpen());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.auth.user()) == null ? null : tmp_2_0.unreadNotifications) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notificationsOpen() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.userMenuOpen());
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_5_0 = ctx_r1.auth.user()) == null ? null : tmp_5_0.avatarUrl, \u0275\u0275sanitizeUrl)("alt", (((tmp_6_0 = ctx_r1.auth.user()) == null ? null : tmp_6_0.displayName) ?? "User") + " profile avatar");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.userMenuOpen() ? 13 : -1);
  }
}
function TopNavbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-language-switcher");
    \u0275\u0275elementStart(1, "button", 21);
    \u0275\u0275listener("click", function TopNavbarComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSignIn());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function TopNavbarComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSignUp());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "common.signIn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "common.register"), " ");
  }
}
var _TopNavbarComponent = class _TopNavbarComponent {
  constructor() {
    this.router = inject(Router);
    this.host = inject(ElementRef);
    this.authModal = inject(AuthModalService);
    this.layout = inject(LayoutService);
    this.search = inject(SearchService);
    this.auth = inject(AuthService);
    this.userMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "userMenuOpen" }] : []);
    this.notificationsOpen = signal(false, ...ngDevMode ? [{ debugName: "notificationsOpen" }] : []);
    this.notifications = [
      "Your weekly curator digest is ready.",
      "A filmmaker you follow has published a new masterclass.",
      "Creator tools are available for your channel."
    ];
  }
  onQueryChange(event) {
    const value = event.target.value;
    this.search.updateQuery(value);
  }
  openSignIn() {
    this.auth.setPendingIntent(null);
    this.authModal.open({
      mode: "signin",
      title: "Welcome back",
      description: "Sign in to continue watching, saving, and creating."
    });
  }
  openSignUp() {
    this.auth.setPendingIntent(null);
    this.authModal.open({
      mode: "signup",
      title: "Create your account",
      description: "Join Cinematic Curator to save favorites, follow creators, and unlock uploads."
    });
  }
  handleUpload() {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: "upload",
        title: "Sign in to upload your first video",
        description: "Create an account or sign in to publish videos and access creator tools.",
        redirectUrl: "/upload",
        preferredMode: "signin"
      };
      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }
    this.closeOverlays();
    this.auth.enableCreatorMode();
    void this.router.navigateByUrl("/upload");
  }
  toggleNotifications() {
    if (!this.auth.isAuthenticated()) {
      const intent = {
        kind: "notifications",
        title: "Sign in to view notifications",
        description: "Stay in sync with creators, replies, and uploads tailored to your account.",
        preferredMode: "signin"
      };
      this.auth.setPendingIntent(intent);
      this.authModal.openForIntent(intent);
      return;
    }
    this.userMenuOpen.set(false);
    this.notificationsOpen.update((value) => !value);
  }
  toggleUserMenu() {
    this.notificationsOpen.set(false);
    this.userMenuOpen.update((value) => !value);
  }
  closeOverlays() {
    this.userMenuOpen.set(false);
    this.notificationsOpen.set(false);
  }
  toggleCreatorMode() {
    if (!this.auth.isCreator()) {
      this.auth.enableCreatorMode();
      this.userMenuOpen.set(false);
      void this.router.navigateByUrl("/upload");
      return;
    }
    this.auth.setCreatorMode(this.auth.role() !== "creator");
    this.userMenuOpen.set(false);
  }
  logout() {
    this.auth.logout();
    this.closeOverlays();
    void this.router.navigateByUrl("/creator");
  }
  onDocumentClick(event) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.closeOverlays();
    }
  }
};
_TopNavbarComponent.\u0275fac = function TopNavbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopNavbarComponent)();
};
_TopNavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopNavbarComponent, selectors: [["app-top-navbar"]], hostBindings: function TopNavbarComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function TopNavbarComponent_click_HostBindingHandler($event) {
      return ctx.onDocumentClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, decls: 16, vars: 2, consts: [[1, "top-navbar"], [1, "top-navbar__start"], ["type", "button", "aria-label", "Toggle sidebar", 1, "icon-button", "top-navbar__menu", 3, "click"], [1, "material-symbols-outlined"], ["routerLink", "/home", 1, "brand"], ["role", "search", 1, "top-navbar__search"], [1, "material-symbols-outlined", "search-icon"], ["for", "creator-search", 1, "visually-hidden"], ["id", "creator-search", "type", "search", "name", "creatorSearch", "placeholder", "Cerca", "autocomplete", "off", "spellcheck", "false", 3, "input", "value"], [1, "top-navbar__actions"], ["type", "button", 1, "top-navbar__upload-button", 3, "click"], [1, "top-navbar__overlay-anchor"], ["type", "button", "aria-label", "Open notifications", 1, "icon-button", "top-navbar__notification-button", 3, "click"], [1, "top-navbar__badge"], ["aria-label", "Notifications", 1, "top-navbar__panel", "surface-card"], ["type", "button", "aria-label", "Open account menu", 1, "avatar", 3, "click"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt"], [1, "top-navbar__panel", "top-navbar__panel--menu"], [1, "top-navbar__panel-title", "text-label"], [1, "top-navbar__notification-item"], [3, "upload", "toggleCreatorMode", "logoutUser", "closeMenu"], ["type", "button", 1, "top-navbar__text-button", 3, "click"], ["type", "button", 1, "top-navbar__register-button", 3, "click"]], template: function TopNavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function TopNavbarComponent_Template_button_click_2_listener() {
      return ctx.layout.toggleSidebar();
    });
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4, "menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6, "Cinematic Curator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 7);
    \u0275\u0275text(11, "Search creators and videos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 8);
    \u0275\u0275listener("input", function TopNavbarComponent_Template_input_input_12_listener($event) {
      return ctx.onQueryChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275conditionalCreate(14, TopNavbarComponent_Conditional_14_Template, 14, 7)(15, TopNavbarComponent_Conditional_15_Template, 7, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("value", ctx.search.query());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 14 : 15);
  }
}, dependencies: [RouterLink, UserDropdownComponent, LanguageSwitcherComponent, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  position: fixed;\n  inset-block-start: 0;\n  inset-inline: 0;\n  z-index: 50;\n}\n.top-navbar[_ngcontent-%COMP%] {\n  min-block-size: var(--top-nav-height);\n  padding-inline: 1.5rem;\n  display: grid;\n  grid-template-columns: 1fr minmax(18rem, 32rem) 1fr;\n  align-items: center;\n  gap: 1rem;\n  background: rgba(28, 27, 27, 0.7);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-block-end: 1px solid rgba(172, 135, 143, 0.12);\n}\n.top-navbar__start[_ngcontent-%COMP%], \n.top-navbar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.top-navbar__actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  position: relative;\n  gap: 0.5rem;\n}\n.top-navbar__menu[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.brand[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n.top-navbar__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-block-size: 2.75rem;\n  padding-inline: 1rem;\n  background: rgba(53, 53, 52, 0.45);\n  border: 1px solid rgba(172, 135, 143, 0.12);\n  border-radius: var(--radius-md);\n  transition: box-shadow 180ms ease, border-color 180ms ease;\n}\n.top-navbar__search[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(76, 214, 251, 0.55);\n  box-shadow: 0 0 0 2px rgba(76, 214, 251, 0.18);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--color-on-surface-variant);\n  font-size: 1.1rem;\n}\n.top-navbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  color: var(--color-on-surface);\n}\n.top-navbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(229, 188, 197, 0.75);\n}\n.avatar[_ngcontent-%COMP%] {\n  inline-size: 2.35rem;\n  block-size: 2.35rem;\n  border-radius: 50%;\n  overflow: hidden;\n  padding: 0;\n  background: rgba(255, 255, 255, 0.05);\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n.avatar[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.09);\n}\n.avatar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n}\n.top-navbar__upload-button[_ngcontent-%COMP%], \n.top-navbar__register-button[_ngcontent-%COMP%], \n.top-navbar__text-button[_ngcontent-%COMP%] {\n  min-block-size: 2.5rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-weight: 800;\n  transition:\n    background-color 160ms ease,\n    color 160ms ease,\n    transform 160ms ease;\n}\n.top-navbar__upload-button[_ngcontent-%COMP%] {\n  padding-inline: 0.95rem 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-tertiary);\n}\n.top-navbar__text-button[_ngcontent-%COMP%] {\n  padding-inline: 0.65rem;\n  color: var(--color-on-surface);\n  font-weight: 700;\n}\n.top-navbar__register-button[_ngcontent-%COMP%] {\n  padding-inline: 1rem;\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.top-navbar__upload-button[_ngcontent-%COMP%]:hover, \n.top-navbar__notification-button[_ngcontent-%COMP%]:hover, \n.top-navbar__text-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.top-navbar__register-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.04);\n}\n.top-navbar__upload-button[_ngcontent-%COMP%]:active, \n.top-navbar__notification-button[_ngcontent-%COMP%]:active, \n.avatar[_ngcontent-%COMP%]:active, \n.top-navbar__register-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.top-navbar__upload-button[_ngcontent-%COMP%]:focus-visible, \n.top-navbar__text-button[_ngcontent-%COMP%]:focus-visible, \n.top-navbar__register-button[_ngcontent-%COMP%]:focus-visible, \n.top-navbar__notification-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.top-navbar__overlay-anchor[_ngcontent-%COMP%] {\n  position: relative;\n}\n.top-navbar__notification-button[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.03);\n}\n.top-navbar__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: -0.15rem;\n  inset-block-start: -0.15rem;\n  min-inline-size: 1.1rem;\n  min-block-size: 1.1rem;\n  padding-inline: 0.2rem;\n  border-radius: var(--radius-pill);\n  display: grid;\n  place-items: center;\n  background: var(--color-primary-container);\n  color: var(--color-white);\n  font: 700 0.7rem/1 "Inter", sans-serif;\n}\n.top-navbar__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  inset-block-start: calc(100% + 0.75rem);\n  z-index: 10;\n}\n.top-navbar__panel--menu[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n}\n.top-navbar__panel.surface-card[_ngcontent-%COMP%] {\n  inline-size: min(22rem, 100vw - 2rem);\n  padding: 1rem;\n}\n.top-navbar__panel-title[_ngcontent-%COMP%], \n.top-navbar__notification-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.top-navbar__panel-title[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.top-navbar__notification-item[_ngcontent-%COMP%] {\n  padding-block: 0.6rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.5;\n}\n@media (max-width: 767px) {\n  .top-navbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n    padding-inline: 1rem;\n  }\n  .top-navbar__search[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-navbar__actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .top-navbar__upload-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-navbar__upload-button[_ngcontent-%COMP%] {\n    inline-size: 2.75rem;\n    padding-inline: 0;\n    justify-content: center;\n  }\n  .top-navbar__text-button[_ngcontent-%COMP%] {\n    padding-inline: 0.6rem;\n  }\n  .top-navbar__register-button[_ngcontent-%COMP%] {\n    padding-inline: 0.85rem;\n  }\n}\n/*# sourceMappingURL=top-navbar.component.css.map */'], changeDetection: 0 });
var TopNavbarComponent = _TopNavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-top-navbar", standalone: true, imports: [RouterLink, UserDropdownComponent, LanguageSwitcherComponent, TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<nav class="top-navbar">
  <div class="top-navbar__start">
    <button
      type="button"
      class="icon-button top-navbar__menu"
      aria-label="Toggle sidebar"
      (click)="layout.toggleSidebar()"
    >
      <span class="material-symbols-outlined">menu</span>
    </button>

    <a class="brand" routerLink="/home">Cinematic Curator</a>
  </div>

  <div class="top-navbar__search" role="search">
    <span class="material-symbols-outlined search-icon">search</span>
    <label class="visually-hidden" for="creator-search">Search creators and videos</label>
    <input
      id="creator-search"
      type="search"
      name="creatorSearch"
      placeholder="Cerca"
      [value]="search.query()"
      (input)="onQueryChange($event)"
      autocomplete="off"
      spellcheck="false"
    />
  </div>

  <div class="top-navbar__actions">
    @if (auth.isAuthenticated()) {
      <button type="button" class="top-navbar__upload-button" (click)="handleUpload()">
        <span class="material-symbols-outlined">video_call</span>
        Upload
      </button>

      <div class="top-navbar__overlay-anchor">
        <button
          type="button"
          class="icon-button top-navbar__notification-button"
          aria-label="Open notifications"
          [attr.aria-expanded]="notificationsOpen()"
          (click)="toggleNotifications()">
          <span class="material-symbols-outlined">notifications</span>
          @if (auth.user()?.unreadNotifications) {
            <span class="top-navbar__badge">{{ auth.user()?.unreadNotifications }}</span>
          }
        </button>

        @if (notificationsOpen()) {
          <section class="top-navbar__panel surface-card" aria-label="Notifications">
            <p class="top-navbar__panel-title text-label">Notifications</p>
            @for (item of notifications; track item) {
              <p class="top-navbar__notification-item">{{ item }}</p>
            }
          </section>
        }
      </div>

      <div class="top-navbar__overlay-anchor">
        <button
          type="button"
          class="avatar"
          aria-label="Open account menu"
          [attr.aria-expanded]="userMenuOpen()"
          (click)="toggleUserMenu()">
          <img
            [src]="auth.user()?.avatarUrl"
            [alt]="(auth.user()?.displayName ?? 'User') + ' profile avatar'"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer" />
        </button>

        @if (userMenuOpen()) {
          <div class="top-navbar__panel top-navbar__panel--menu">
            <app-user-dropdown
              (upload)="handleUpload()"
              (toggleCreatorMode)="toggleCreatorMode()"
              (logoutUser)="logout()"
              (closeMenu)="closeOverlays()"></app-user-dropdown>
          </div>
        }
      </div>
    } @else {
      <app-language-switcher></app-language-switcher>
      <button type="button" class="top-navbar__text-button" (click)="openSignIn()">
        {{ 'common.signIn' | translate }}
      </button>
      <button type="button" class="top-navbar__register-button" (click)="openSignUp()">
        {{ 'common.register' | translate }}
      </button>
    }
  </div>
</nav>
`, styles: ['/* src/app/layout/top-navbar/top-navbar.component.scss */\n:host {\n  position: fixed;\n  inset-block-start: 0;\n  inset-inline: 0;\n  z-index: 50;\n}\n.top-navbar {\n  min-block-size: var(--top-nav-height);\n  padding-inline: 1.5rem;\n  display: grid;\n  grid-template-columns: 1fr minmax(18rem, 32rem) 1fr;\n  align-items: center;\n  gap: 1rem;\n  background: rgba(28, 27, 27, 0.7);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-block-end: 1px solid rgba(172, 135, 143, 0.12);\n}\n.top-navbar__start,\n.top-navbar__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.top-navbar__actions {\n  justify-content: flex-end;\n  position: relative;\n  gap: 0.5rem;\n}\n.top-navbar__menu {\n  color: var(--color-primary);\n}\n.brand {\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n.top-navbar__search {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-block-size: 2.75rem;\n  padding-inline: 1rem;\n  background: rgba(53, 53, 52, 0.45);\n  border: 1px solid rgba(172, 135, 143, 0.12);\n  border-radius: var(--radius-md);\n  transition: box-shadow 180ms ease, border-color 180ms ease;\n}\n.top-navbar__search:focus-within {\n  border-color: rgba(76, 214, 251, 0.55);\n  box-shadow: 0 0 0 2px rgba(76, 214, 251, 0.18);\n}\n.search-icon {\n  color: var(--color-on-surface-variant);\n  font-size: 1.1rem;\n}\n.top-navbar__search input {\n  inline-size: 100%;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  color: var(--color-on-surface);\n}\n.top-navbar__search input::placeholder {\n  color: rgba(229, 188, 197, 0.75);\n}\n.avatar {\n  inline-size: 2.35rem;\n  block-size: 2.35rem;\n  border-radius: 50%;\n  overflow: hidden;\n  padding: 0;\n  background: rgba(255, 255, 255, 0.05);\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n.avatar:hover {\n  background: rgba(255, 255, 255, 0.09);\n}\n.avatar:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.avatar img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n}\n.top-navbar__upload-button,\n.top-navbar__register-button,\n.top-navbar__text-button {\n  min-block-size: 2.5rem;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-weight: 800;\n  transition:\n    background-color 160ms ease,\n    color 160ms ease,\n    transform 160ms ease;\n}\n.top-navbar__upload-button {\n  padding-inline: 0.95rem 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--color-tertiary);\n}\n.top-navbar__text-button {\n  padding-inline: 0.65rem;\n  color: var(--color-on-surface);\n  font-weight: 700;\n}\n.top-navbar__register-button {\n  padding-inline: 1rem;\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.top-navbar__upload-button:hover,\n.top-navbar__notification-button:hover,\n.top-navbar__text-button:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.top-navbar__register-button:hover {\n  filter: brightness(1.04);\n}\n.top-navbar__upload-button:active,\n.top-navbar__notification-button:active,\n.avatar:active,\n.top-navbar__register-button:active {\n  transform: translateY(1px);\n}\n.top-navbar__upload-button:focus-visible,\n.top-navbar__text-button:focus-visible,\n.top-navbar__register-button:focus-visible,\n.top-navbar__notification-button:focus-visible {\n  outline: 2px solid rgba(76, 214, 251, 0.42);\n  outline-offset: 2px;\n}\n.top-navbar__overlay-anchor {\n  position: relative;\n}\n.top-navbar__notification-button {\n  position: relative;\n  background: rgba(255, 255, 255, 0.03);\n}\n.top-navbar__badge {\n  position: absolute;\n  inset-inline-end: -0.15rem;\n  inset-block-start: -0.15rem;\n  min-inline-size: 1.1rem;\n  min-block-size: 1.1rem;\n  padding-inline: 0.2rem;\n  border-radius: var(--radius-pill);\n  display: grid;\n  place-items: center;\n  background: var(--color-primary-container);\n  color: var(--color-white);\n  font: 700 0.7rem/1 "Inter", sans-serif;\n}\n.top-navbar__panel {\n  position: absolute;\n  inset-inline-end: 0;\n  inset-block-start: calc(100% + 0.75rem);\n  z-index: 10;\n}\n.top-navbar__panel--menu {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n}\n.top-navbar__panel.surface-card {\n  inline-size: min(22rem, 100vw - 2rem);\n  padding: 1rem;\n}\n.top-navbar__panel-title,\n.top-navbar__notification-item {\n  margin: 0;\n}\n.top-navbar__panel-title {\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.top-navbar__notification-item {\n  padding-block: 0.6rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.5;\n}\n@media (max-width: 767px) {\n  .top-navbar {\n    grid-template-columns: 1fr auto;\n    padding-inline: 1rem;\n  }\n  .top-navbar__search {\n    display: none;\n  }\n  .top-navbar__actions {\n    gap: 0.5rem;\n  }\n  .top-navbar__upload-button span {\n    display: none;\n  }\n  .top-navbar__upload-button {\n    inline-size: 2.75rem;\n    padding-inline: 0;\n    justify-content: center;\n  }\n  .top-navbar__text-button {\n    padding-inline: 0.6rem;\n  }\n  .top-navbar__register-button {\n    padding-inline: 0.85rem;\n  }\n}\n/*# sourceMappingURL=top-navbar.component.css.map */\n'] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopNavbarComponent, { className: "TopNavbarComponent", filePath: "src/app/layout/top-navbar/top-navbar.component.ts", lineNumber: 26 });
})();

export {
  LayoutService,
  FloatingActionButtonComponent,
  MobileNavComponent,
  SideNavComponent,
  TopNavbarComponent
};
//# sourceMappingURL=chunk-5SL5Y3IF.js.map
