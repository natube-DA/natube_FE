import { TestBed } from '@angular/core/testing';
import { ShortCardComponent } from './short-card.component';

describe('ShortCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortCardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShortCardComponent);
    fixture.componentRef.setInput('item', {
      id: '1',
      title: 'Short',
      category: 'Noir',
      thumbnailUrl: 'https://example.com/image.jpg'
    });
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
