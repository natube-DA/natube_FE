import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-VWYUV7GB.js";

// src/app/features/upload/pages/upload-page.component.ts
var _UploadPageComponent = class _UploadPageComponent {
};
_UploadPageComponent.\u0275fac = function UploadPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UploadPageComponent)();
};
_UploadPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPageComponent, selectors: [["app-upload-page"]], decls: 16, vars: 0, consts: [[1, "upload-page", "surface-card"], [1, "page-title"], ["routerLink", "/creator"]], template: function UploadPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Secure upload area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " This page is intentionally minimal. In production, upload must validate file type, size, checksum, authorization, malware scanning and moderation on the backend. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul")(6, "li");
    \u0275\u0275text(7, "Use signed URLs or dedicated upload endpoints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "Validate content server-side");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Store originals outside the public web root");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Process thumbnails and transcoding asynchronously on backend workers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a", 2);
    \u0275\u0275text(15, "Back to feed");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 2rem;\n}\n.upload-page[_ngcontent-%COMP%] {\n  max-inline-size: 52rem;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.upload-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.upload-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.upload-page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\n.upload-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.upload-page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(229, 188, 197, 0.82);\n  line-height: 1.6;\n}\n.upload-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-tertiary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=upload-page.component.css.map */"], changeDetection: 0 });
var UploadPageComponent = _UploadPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadPageComponent, [{
    type: Component,
    args: [{ selector: "app-upload-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="upload-page surface-card">\n  <h1 class="page-title">Secure upload area</h1>\n\n  <p>\n    This page is intentionally minimal. In production, upload must validate file type,\n    size, checksum, authorization, malware scanning and moderation on the backend.\n  </p>\n\n  <ul>\n    <li>Use signed URLs or dedicated upload endpoints</li>\n    <li>Validate content server-side</li>\n    <li>Store originals outside the public web root</li>\n    <li>Process thumbnails and transcoding asynchronously on backend workers</li>\n  </ul>\n\n  <a routerLink="/creator">Back to feed</a>\n</section>\n', styles: ["/* src/app/features/upload/pages/upload-page.component.scss */\n:host {\n  display: block;\n  min-block-size: 100vh;\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 2rem;\n}\n.upload-page {\n  max-inline-size: 52rem;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.upload-page h1,\n.upload-page p,\n.upload-page ul {\n  margin: 0 0 1rem;\n}\n.upload-page p,\n.upload-page li {\n  color: rgba(229, 188, 197, 0.82);\n  line-height: 1.6;\n}\n.upload-page a {\n  color: var(--color-tertiary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=upload-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPageComponent, { className: "UploadPageComponent", filePath: "src/app/features/upload/pages/upload-page.component.ts", lineNumber: 12 });
})();
export {
  UploadPageComponent
};
//# sourceMappingURL=chunk-XQ4JG52A.js.map
