import { TestBed } from '@angular/core/testing';
import { VideoCardComponent } from './video-card.component';

describe('VideoCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VideoCardComponent);
    fixture.componentRef.setInput('item', {
      id: '1',
      title: 'Demo',
      category: 'Architecture',
      duration: '02:00',
      thumbnailUrl: 'https://example.com/image.jpg',
      creator: {
        id: 'c1',
        name: 'Creator',
        avatarUrl: 'https://example.com/avatar.jpg',
        specialty: 'Art'
      }
    });
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
