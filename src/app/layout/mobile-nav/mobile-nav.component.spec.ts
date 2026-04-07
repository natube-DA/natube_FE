import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MobileNavComponent } from './mobile-nav.component';

describe('MobileNavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MobileNavComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
