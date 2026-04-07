import { TestBed } from '@angular/core/testing';
import { FeaturedVideoCardComponent } from './featured-video-card.component';

describe('FeaturedVideoCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedVideoCardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FeaturedVideoCardComponent);
    fixture.componentRef.setInput('item', {
      id: '1',
      title: 'Demo',
      category: 'Newest',
      duration: '10:00',
      thumbnailUrl: 'https://example.com/image.jpg',
      creator: {
        id: 'c1',
        name: 'Creator',
        avatarUrl: 'https://example.com/avatar.jpg',
        specialty: 'Cinema'
      }
    });
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
