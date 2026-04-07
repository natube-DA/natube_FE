import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VWYUV7GB.js";

// src/app/shared/featured-video-card/featured-video-card.component.ts
var _FeaturedVideoCardComponent = class _FeaturedVideoCardComponent {
};
_FeaturedVideoCardComponent.\u0275fac = function FeaturedVideoCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeaturedVideoCardComponent)();
};
_FeaturedVideoCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturedVideoCardComponent, selectors: [["app-featured-video-card"]], inputs: { item: "item" }, decls: 14, vars: 8, consts: [[1, "featured-card", "surface-card"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "featured-card__image", 3, "src", "alt"], [1, "featured-card__overlay"], [1, "featured-card__meta"], [1, "badge"], [1, "meta"], [1, "card-title", "featured-card__title"], [1, "featured-card__creator"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 3, "src", "alt"], [1, "nav-label"]], template: function FeaturedVideoCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "h4", 6);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 7);
    \u0275\u0275domElement(11, "img", 8);
    \u0275\u0275domElementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx.item.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.item.badge || ctx.item.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.title);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", ctx.item.creator.avatarUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.creator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.creator.name);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.featured-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-block-size: 34rem;\n  overflow: hidden;\n}\n.featured-card__image[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 600ms ease;\n}\n.featured-card[_ngcontent-%COMP%]:hover   .featured-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.featured-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 30%,\n      rgba(14, 14, 14, 0.94) 100%);\n}\n.featured-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-block-size: 1.5rem;\n  padding-inline: 0.65rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-tertiary);\n  color: var(--color-on-tertiary);\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.meta[_ngcontent-%COMP%] {\n  color: var(--color-tertiary);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.featured-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: clamp(1.8rem, 3vw, 2.4rem);\n  font-weight: 800;\n  line-height: 1.05;\n}\n.featured-card__creator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.featured-card__creator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 2rem;\n  block-size: 2rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid var(--color-tertiary);\n}\n.featured-card__creator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-tertiary);\n  font-weight: 700;\n}\n@media (max-width: 767px) {\n  .featured-card[_ngcontent-%COMP%] {\n    min-block-size: 20rem;\n  }\n  .featured-card__overlay[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=featured-video-card.component.css.map */"], changeDetection: 0 });
var FeaturedVideoCardComponent = _FeaturedVideoCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturedVideoCardComponent, [{
    type: Component,
    args: [{ selector: "app-featured-video-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<article class="featured-card surface-card">\n  <img\n    class="featured-card__image"\n    [src]="item.thumbnailUrl"\n    [alt]="item.title"\n    loading="lazy"\n    decoding="async"\n    referrerpolicy="no-referrer"\n  />\n\n  <div class="featured-card__overlay">\n    <div class="featured-card__meta">\n      <span class="badge">{{ item.badge || item.category }}</span>\n      <span class="meta">{{ item.duration }}</span>\n    </div>\n\n    <h4 class="card-title featured-card__title">{{ item.title }}</h4>\n\n    <div class="featured-card__creator">\n      <img\n        [src]="item.creator.avatarUrl"\n        [alt]="item.creator.name"\n        loading="lazy"\n        decoding="async"\n        referrerpolicy="no-referrer"\n      />\n      <span class="nav-label">{{ item.creator.name }}</span>\n    </div>\n  </div>\n</article>\n', styles: ["/* src/app/shared/featured-video-card/featured-video-card.component.scss */\n:host {\n  display: block;\n}\n.featured-card {\n  position: relative;\n  min-block-size: 34rem;\n  overflow: hidden;\n}\n.featured-card__image {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 600ms ease;\n}\n.featured-card:hover .featured-card__image {\n  transform: scale(1.04);\n}\n.featured-card__overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 30%,\n      rgba(14, 14, 14, 0.94) 100%);\n}\n.featured-card__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  min-block-size: 1.5rem;\n  padding-inline: 0.65rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-tertiary);\n  color: var(--color-on-tertiary);\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.meta {\n  color: var(--color-tertiary);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.featured-card__title {\n  margin: 0 0 1rem;\n  font-size: clamp(1.8rem, 3vw, 2.4rem);\n  font-weight: 800;\n  line-height: 1.05;\n}\n.featured-card__creator {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.featured-card__creator img {\n  inline-size: 2rem;\n  block-size: 2rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid var(--color-tertiary);\n}\n.featured-card__creator span {\n  color: var(--color-tertiary);\n  font-weight: 700;\n}\n@media (max-width: 767px) {\n  .featured-card {\n    min-block-size: 20rem;\n  }\n  .featured-card__overlay {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=featured-video-card.component.css.map */\n"] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturedVideoCardComponent, { className: "FeaturedVideoCardComponent", filePath: "src/app/shared/featured-video-card/featured-video-card.component.ts", lineNumber: 11 });
})();

// src/app/shared/video-card/video-card.component.ts
var _VideoCardComponent = class _VideoCardComponent {
};
_VideoCardComponent.\u0275fac = function VideoCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VideoCardComponent)();
};
_VideoCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCardComponent, selectors: [["app-video-card"]], inputs: { item: "item" }, decls: 8, vars: 6, consts: [[1, "video-card", "surface-card"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "video-card__image", 3, "src", "alt"], [1, "video-card__overlay"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "video-card__avatar", 3, "src", "alt"], [1, "nav-label", "video-card__creator"], [1, "text-label", "video-card__category"]], template: function VideoCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275domElementStart(2, "div", 2);
    \u0275\u0275domElement(3, "img", 3);
    \u0275\u0275domElementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx.item.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.title);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", ctx.item.creator.avatarUrl, \u0275\u0275sanitizeUrl)("alt", ctx.item.creator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.creator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.item.category);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.video-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-block-size: 16rem;\n  overflow: hidden;\n}\n.video-card__image[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 500ms ease;\n}\n.video-card[_ngcontent-%COMP%]:hover   .video-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.video-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 0.35rem;\n  background: rgba(0, 0, 0, 0.42);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  transition: opacity 180ms ease;\n}\n.video-card[_ngcontent-%COMP%]:hover   .video-card__overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.video-card__avatar[_ngcontent-%COMP%] {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--color-primary);\n}\n.video-card__creator[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.video-card__category[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n@media (max-width: 767px) {\n  .video-card[_ngcontent-%COMP%] {\n    min-block-size: 12rem;\n  }\n  .video-card__overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n    justify-items: start;\n    align-content: end;\n    padding: 1rem;\n    background:\n      linear-gradient(\n        180deg,\n        transparent 45%,\n        rgba(0, 0, 0, 0.84) 100%);\n  }\n  .video-card__avatar[_ngcontent-%COMP%] {\n    inline-size: 2rem;\n    block-size: 2rem;\n  }\n}\n/*# sourceMappingURL=video-card.component.css.map */"], changeDetection: 0 });
var VideoCardComponent = _VideoCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCardComponent, [{
    type: Component,
    args: [{ selector: "app-video-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<article class="video-card surface-card">\n  <img\n    class="video-card__image"\n    [src]="item.thumbnailUrl"\n    [alt]="item.title"\n    loading="lazy"\n    decoding="async"\n    referrerpolicy="no-referrer"\n  />\n\n  <div class="video-card__overlay">\n    <img\n      class="video-card__avatar"\n      [src]="item.creator.avatarUrl"\n      [alt]="item.creator.name"\n      loading="lazy"\n      decoding="async"\n      referrerpolicy="no-referrer"\n    />\n    <p class="nav-label video-card__creator">{{ item.creator.name }}</p>\n    <span class="text-label video-card__category">{{ item.category }}</span>\n  </div>\n</article>\n', styles: ["/* src/app/shared/video-card/video-card.component.scss */\n:host {\n  display: block;\n}\n.video-card {\n  position: relative;\n  min-block-size: 16rem;\n  overflow: hidden;\n}\n.video-card__image {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n  transition: transform 500ms ease;\n}\n.video-card:hover .video-card__image {\n  transform: scale(1.05);\n}\n.video-card__overlay {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 0.35rem;\n  background: rgba(0, 0, 0, 0.42);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  transition: opacity 180ms ease;\n}\n.video-card:hover .video-card__overlay {\n  opacity: 1;\n}\n.video-card__avatar {\n  inline-size: 3rem;\n  block-size: 3rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--color-primary);\n}\n.video-card__creator {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.video-card__category {\n  color: var(--color-primary);\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n@media (max-width: 767px) {\n  .video-card {\n    min-block-size: 12rem;\n  }\n  .video-card__overlay {\n    opacity: 1;\n    justify-items: start;\n    align-content: end;\n    padding: 1rem;\n    background:\n      linear-gradient(\n        180deg,\n        transparent 45%,\n        rgba(0, 0, 0, 0.84) 100%);\n  }\n  .video-card__avatar {\n    inline-size: 2rem;\n    block-size: 2rem;\n  }\n}\n/*# sourceMappingURL=video-card.component.css.map */\n"] }]
  }], null, { item: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCardComponent, { className: "VideoCardComponent", filePath: "src/app/shared/video-card/video-card.component.ts", lineNumber: 11 });
})();

export {
  FeaturedVideoCardComponent,
  VideoCardComponent
};
//# sourceMappingURL=chunk-UIQ66MXL.js.map
