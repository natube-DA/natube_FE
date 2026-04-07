import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should collapse sidebar on mobile width', () => {
    service.setViewportWidth(500);
    expect(service.isMobile()).toBeTrue();
    expect(service.sidebarCollapsed()).toBeTrue();
  });

  it('should toggle sidebar only on desktop', () => {
    service.setViewportWidth(1200);
    service.toggleSidebar();
    expect(service.sidebarCollapsed()).toBeTrue();

    service.setViewportWidth(500);
    service.toggleSidebar();
    expect(service.sidebarCollapsed()).toBeTrue();
  });
});
