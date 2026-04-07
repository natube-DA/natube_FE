import {
  FloatingActionButtonComponent,
  LayoutService,
  MobileNavComponent,
  SideNavComponent,
  TopNavbarComponent
} from "./chunk-5SL5Y3IF.js";
import {
  AuthModalService,
  AuthService
} from "./chunk-HALBEQZX.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  Router,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate3
} from "./chunk-VWYUV7GB.js";

// src/app/features/profile/pages/profile-page.component.ts
function ProfilePageComponent_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function ProfilePageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "div")(2, "p", 2);
    \u0275\u0275text(3, "Account experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 3);
    \u0275\u0275text(5, "Build your cinematic identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, " Sign in or create an account to save preferences, follow creators, manage uploads, and switch into creator mode without leaving the feed experience. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
    \u0275\u0275listener("click", function ProfilePageComponent_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSignUp());
    });
    \u0275\u0275text(10, "Create account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function ProfilePageComponent_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSignIn());
    });
    \u0275\u0275text(12, "Sign in");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "section", 8)(14, "p", 9);
    \u0275\u0275text(15, "What unlocks with an account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ul");
    \u0275\u0275repeaterCreate(17, ProfilePageComponent_Conditional_3_For_18_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.accountHighlights);
  }
}
function ProfilePageComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
    \u0275\u0275listener("click", function ProfilePageComponent_Conditional_4_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.enableCreatorMode());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function ProfilePageComponent_Conditional_4_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(13, "Sign out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "section", 12)(15, "article", 13)(16, "p", 14);
    \u0275\u0275text(17, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2", 15);
    \u0275\u0275text(19, "Identity & security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Email sign-in is active and your session stays available across visits on this device.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul")(23, "li");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Session status: active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "article", 13)(30, "p", 14);
    \u0275\u0275text(31, "Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h2", 15);
    \u0275\u0275text(33, "Watch experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Use this area for watch preferences, playback defaults, saved topics, and creator follows.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ul")(37, "li");
    \u0275\u0275text(38, "Recommended for you: enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Playlist sync: available");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "article", 13)(44, "p", 14);
    \u0275\u0275text(45, "Creator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h2", 15);
    \u0275\u0275text(47, "Creator mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49, "Switch into creator workflows to upload content, manage your channel, and review analytics.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ul")(51, "li");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "Dashboard route: `/creator`");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56, "Upload route: `/upload`");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r5.avatarUrl, \u0275\u0275sanitizeUrl)("alt", user_r5.displayName + " avatar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r5.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", user_r5.email, " \xB7 ", user_r5.plan, " plan \xB7 ", ctx_r1.auth.role() === "creator" ? "Creator mode active" : "Viewer mode active", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.auth.isCreator() ? "Open creator tools" : "Become a creator", " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Primary email: ", user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Sign-in provider: ", user_r5.authProvider);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("Release alerts: ", user_r5.unreadNotifications > 0 ? "enabled" : "quiet mode");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Status: ", ctx_r1.auth.isCreator() ? "creator tools enabled" : "ready to activate");
  }
}
function ProfilePageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProfilePageComponent_Conditional_4_Conditional_0_Template, 57, 11);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.auth.user()) ? 0 : -1, tmp_1_0);
  }
}
var _ProfilePageComponent = class _ProfilePageComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.authModal = inject(AuthModalService);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.layout = inject(LayoutService);
    this.accountHighlights = [
      "Sync watch preferences across devices",
      "Save creators, playlists, and release alerts",
      "Unlock creator tools and upload workflows"
    ];
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  openSignIn() {
    this.auth.setPendingIntent({
      kind: "profile",
      title: "Sign in to manage your profile",
      description: "Access your saved preferences, creator tools, and account settings.",
      redirectUrl: "/profile",
      preferredMode: "signin"
    });
    this.authModal.openForIntent({
      kind: "profile",
      title: "Sign in to manage your profile",
      description: "Access your saved preferences, creator tools, and account settings.",
      redirectUrl: "/profile",
      preferredMode: "signin"
    });
  }
  openSignUp() {
    this.auth.setPendingIntent({
      kind: "profile",
      title: "Create your account",
      description: "Set up your cinematic profile and keep your creator preferences in sync.",
      redirectUrl: "/profile",
      preferredMode: "signup"
    });
    this.authModal.openForIntent({
      kind: "profile",
      title: "Create your account",
      description: "Set up your cinematic profile and keep your creator preferences in sync.",
      redirectUrl: "/profile",
      preferredMode: "signup"
    });
  }
  enableCreatorMode() {
    this.auth.enableCreatorMode();
    void this.router.navigateByUrl("/upload");
  }
  logout() {
    this.auth.logout();
    void this.router.navigateByUrl("/creator");
  }
};
_ProfilePageComponent.\u0275fac = function ProfilePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePageComponent)();
};
_ProfilePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePageComponent, selectors: [["app-profile-page"]], hostBindings: function ProfilePageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function ProfilePageComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 7, vars: 5, consts: [[1, "profile-page"], [1, "profile-page__guest-hero"], [1, "profile-page__eyebrow", "text-label"], [1, "page-title", "profile-page__title"], [1, "profile-page__subtitle"], [1, "profile-page__hero-actions"], ["type", "button", 1, "profile-page__primary-button", 3, "click"], ["type", "button", 1, "profile-page__secondary-button", 3, "click"], [1, "profile-page__benefits", "surface-card"], [1, "text-label"], [1, "profile-page__overview", "surface-card"], [1, "profile-page__avatar", 3, "src", "alt"], [1, "profile-page__grid"], [1, "profile-page__card", "surface-card"], [1, "profile-page__card-label", "text-label"], [1, "card-title"]], template: function ProfilePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-top-navbar")(1, "app-side-nav");
    \u0275\u0275elementStart(2, "main", 0);
    \u0275\u0275conditionalCreate(3, ProfilePageComponent_Conditional_3_Template, 19, 0, "section", 1)(4, ProfilePageComponent_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-floating-action-button")(6, "app-mobile-nav");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("profile-page--collapsed", ctx.layout.sidebarCollapsed())("profile-page--mobile", ctx.layout.isMobile());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.auth.isAuthenticated() ? 3 : 4);
  }
}, dependencies: [FloatingActionButtonComponent, MobileNavComponent, SideNavComponent, TopNavbarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.profile-page[_ngcontent-%COMP%] {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.profile-page--collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.profile-page--mobile[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.profile-page__guest-hero[_ngcontent-%COMP%], \n.profile-page__overview[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  align-items: center;\n}\n.profile-page__guest-hero[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 24rem);\n}\n.profile-page__eyebrow[_ngcontent-%COMP%], \n.profile-page__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.profile-page__eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.profile-page__title[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.75rem;\n  font-size: clamp(2.4rem, 5vw, 3.8rem);\n  letter-spacing: -0.05em;\n}\n.profile-page__subtitle[_ngcontent-%COMP%] {\n  max-inline-size: 48rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.profile-page__benefits[_ngcontent-%COMP%], \n.profile-page__overview[_ngcontent-%COMP%], \n.profile-page__card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.profile-page__benefits[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      rgba(76, 214, 251, 0.12),\n      rgba(255, 74, 141, 0.12)),\n    var(--color-surface-container-high);\n}\n.profile-page__benefits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.profile-page__benefits[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.profile-page__card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.profile-page__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.profile-page__card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.profile-page__benefits[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.profile-page__card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-inline-start: 1.1rem;\n  display: grid;\n  gap: 0.6rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n.profile-page__hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.profile-page__primary-button[_ngcontent-%COMP%], \n.profile-page__secondary-button[_ngcontent-%COMP%] {\n  min-block-size: 3rem;\n  padding-inline: 1rem 1.15rem;\n  border-radius: var(--radius-pill);\n  font-weight: 800;\n}\n.profile-page__primary-button[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.profile-page__secondary-button[_ngcontent-%COMP%] {\n  background: rgba(76, 214, 251, 0.08);\n  color: var(--color-tertiary);\n  border: 1px solid rgba(76, 214, 251, 0.2);\n}\n.profile-page__overview[_ngcontent-%COMP%] {\n  grid-template-columns: auto 1fr auto;\n}\n.profile-page__avatar[_ngcontent-%COMP%] {\n  inline-size: 5rem;\n  block-size: 5rem;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n}\n.profile-page__grid[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n.profile-page__card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n}\n.profile-page__card-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.profile-page__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n@media (max-width: 1199px) {\n  .profile-page__guest-hero[_ngcontent-%COMP%], \n   .profile-page__overview[_ngcontent-%COMP%], \n   .profile-page__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .profile-page[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=profile-page.component.css.map */"], changeDetection: 0 });
var ProfilePageComponent = _ProfilePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePageComponent, [{
    type: Component,
    args: [{ selector: "app-profile-page", standalone: true, imports: [FloatingActionButtonComponent, MobileNavComponent, SideNavComponent, TopNavbarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-top-navbar></app-top-navbar>
<app-side-nav></app-side-nav>

<main
  class="profile-page"
  [class.profile-page--collapsed]="layout.sidebarCollapsed()"
  [class.profile-page--mobile]="layout.isMobile()">
  @if (!auth.isAuthenticated()) {
    <section class="profile-page__guest-hero">
      <div>
        <p class="profile-page__eyebrow text-label">Account experience</p>
        <h1 class="page-title profile-page__title">Build your cinematic identity</h1>
        <p class="profile-page__subtitle">
          Sign in or create an account to save preferences, follow creators, manage uploads,
          and switch into creator mode without leaving the feed experience.
        </p>

        <div class="profile-page__hero-actions">
          <button type="button" class="profile-page__primary-button" (click)="openSignUp()">Create account</button>
          <button type="button" class="profile-page__secondary-button" (click)="openSignIn()">Sign in</button>
        </div>
      </div>

      <section class="profile-page__benefits surface-card">
        <p class="text-label">What unlocks with an account</p>
        <ul>
          @for (item of accountHighlights; track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </section>
    </section>
  } @else {
    @if (auth.user(); as user) {
      <section class="profile-page__overview surface-card">
        <img class="profile-page__avatar" [src]="user.avatarUrl" [alt]="user.displayName + ' avatar'" />

        <div>
          <p class="profile-page__eyebrow text-label">Profile</p>
          <h1 class="page-title profile-page__title">{{ user.displayName }}</h1>
          <p class="profile-page__subtitle">
            {{ user.email }} \xB7 {{ user.plan }} plan \xB7
            {{ auth.role() === 'creator' ? 'Creator mode active' : 'Viewer mode active' }}
          </p>
        </div>

        <div class="profile-page__hero-actions">
          <button type="button" class="profile-page__primary-button" (click)="enableCreatorMode()">
            {{ auth.isCreator() ? 'Open creator tools' : 'Become a creator' }}
          </button>
          <button type="button" class="profile-page__secondary-button" (click)="logout()">Sign out</button>
        </div>
      </section>

      <section class="profile-page__grid">
        <article class="profile-page__card surface-card">
          <p class="profile-page__card-label text-label">Account</p>
          <h2 class="card-title">Identity & security</h2>
          <p>Email sign-in is active and your session stays available across visits on this device.</p>
          <ul>
            <li>Primary email: {{ user.email }}</li>
            <li>Sign-in provider: {{ user.authProvider }}</li>
            <li>Session status: active</li>
          </ul>
        </article>

        <article class="profile-page__card surface-card">
          <p class="profile-page__card-label text-label">Preferences</p>
          <h2 class="card-title">Watch experience</h2>
          <p>Use this area for watch preferences, playback defaults, saved topics, and creator follows.</p>
          <ul>
            <li>Recommended for you: enabled</li>
            <li>Release alerts: {{ user.unreadNotifications > 0 ? 'enabled' : 'quiet mode' }}</li>
            <li>Playlist sync: available</li>
          </ul>
        </article>

        <article class="profile-page__card surface-card">
          <p class="profile-page__card-label text-label">Creator</p>
          <h2 class="card-title">Creator mode</h2>
          <p>Switch into creator workflows to upload content, manage your channel, and review analytics.</p>
          <ul>
            <li>Status: {{ auth.isCreator() ? 'creator tools enabled' : 'ready to activate' }}</li>
            <li>Dashboard route: \`/creator\`</li>
            <li>Upload route: \`/upload\`</li>
          </ul>
        </article>
      </section>
    }
  }
</main>

<app-floating-action-button></app-floating-action-button>
<app-mobile-nav></app-mobile-nav>
`, styles: ["/* src/app/features/profile/pages/profile-page.component.scss */\n:host {\n  display: block;\n}\n.profile-page {\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 3rem;\n  margin-inline-start: var(--sidebar-width);\n  transition: margin-inline-start 240ms ease;\n}\n.profile-page--collapsed {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.profile-page--mobile {\n  margin-inline-start: 0;\n  padding-inline: 1rem;\n  padding-block-end: 6rem;\n}\n.profile-page__guest-hero,\n.profile-page__overview {\n  display: grid;\n  gap: 1.5rem;\n  align-items: center;\n}\n.profile-page__guest-hero {\n  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 24rem);\n}\n.profile-page__eyebrow,\n.profile-page__subtitle {\n  margin: 0;\n}\n.profile-page__eyebrow {\n  color: var(--color-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.profile-page__title {\n  margin: 0.35rem 0 0.75rem;\n  font-size: clamp(2.4rem, 5vw, 3.8rem);\n  letter-spacing: -0.05em;\n}\n.profile-page__subtitle {\n  max-inline-size: 48rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.7;\n}\n.profile-page__benefits,\n.profile-page__overview,\n.profile-page__card {\n  padding: 1.5rem;\n}\n.profile-page__benefits {\n  background:\n    linear-gradient(\n      145deg,\n      rgba(76, 214, 251, 0.12),\n      rgba(255, 74, 141, 0.12)),\n    var(--color-surface-container-high);\n}\n.profile-page__benefits p,\n.profile-page__benefits ul,\n.profile-page__card h2,\n.profile-page__card p,\n.profile-page__card ul {\n  margin: 0;\n}\n.profile-page__benefits ul,\n.profile-page__card ul {\n  padding-inline-start: 1.1rem;\n  display: grid;\n  gap: 0.6rem;\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n.profile-page__hero-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.profile-page__primary-button,\n.profile-page__secondary-button {\n  min-block-size: 3rem;\n  padding-inline: 1rem 1.15rem;\n  border-radius: var(--radius-pill);\n  font-weight: 800;\n}\n.profile-page__primary-button {\n  background: var(--color-primary);\n  color: var(--color-on-primary-container);\n}\n.profile-page__secondary-button {\n  background: rgba(76, 214, 251, 0.08);\n  color: var(--color-tertiary);\n  border: 1px solid rgba(76, 214, 251, 0.2);\n}\n.profile-page__overview {\n  grid-template-columns: auto 1fr auto;\n}\n.profile-page__avatar {\n  inline-size: 5rem;\n  block-size: 5rem;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n}\n.profile-page__grid {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n.profile-page__card {\n  display: grid;\n  gap: 0.85rem;\n}\n.profile-page__card-label {\n  margin: 0;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.profile-page__card p {\n  color: var(--color-on-surface-variant);\n  line-height: 1.6;\n}\n@media (max-width: 1199px) {\n  .profile-page__guest-hero,\n  .profile-page__overview,\n  .profile-page__grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .profile-page {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=profile-page.component.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePageComponent, { className: "ProfilePageComponent", filePath: "src/app/features/profile/pages/profile-page.component.ts", lineNumber: 26 });
})();
export {
  ProfilePageComponent
};
//# sourceMappingURL=chunk-55L75KT5.js.map
