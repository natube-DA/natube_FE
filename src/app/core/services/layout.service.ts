import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly mobileBreakpoint = 768;
  private readonly viewportWidth = signal(1280);
  readonly sidebarCollapsed = signal(false);
  readonly isMobile = computed(() => this.viewportWidth() < this.mobileBreakpoint);

  setViewportWidth(width: number): void {
    this.viewportWidth.set(width);

    if (this.isMobile()) {
      this.sidebarCollapsed.set(true);
      return;
    }

    if (width >= this.mobileBreakpoint && this.sidebarCollapsed() && width > 1280) {
      this.sidebarCollapsed.set(false);
    }
  }

  toggleSidebar(): void {
    if (this.isMobile()) {
      return;
    }

    this.sidebarCollapsed.update((value) => !value);
  }
}
