import { TestBed } from '@angular/core/testing';
import { MasterclassCardComponent } from './masterclass-card.component';

describe('MasterclassCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterclassCardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MasterclassCardComponent);
    fixture.componentRef.setInput('item', {
      id: '1',
      title: 'Masterclass',
      description: 'Description',
      thumbnailUrl: 'https://example.com/image.jpg',
      lessonsCount: 5,
      creator: {
        id: 'c1',
        name: 'Creator',
        avatarUrl: 'https://example.com/avatar.jpg',
        specialty: 'Film'
      }
    });
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
