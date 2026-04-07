import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SideNavComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
