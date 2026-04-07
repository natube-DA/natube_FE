import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FloatingActionButtonComponent } from './floating-action-button.component';

describe('FloatingActionButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingActionButtonComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FloatingActionButtonComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
