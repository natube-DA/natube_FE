import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { UploadPageComponent } from './upload-page.component';

describe('UploadPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPageComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UploadPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
