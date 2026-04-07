import { TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header.component';

describe('SectionHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeaderComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SectionHeaderComponent);
    fixture.componentRef.setInput('title', 'Recent Uploads');
    fixture.componentRef.setInput('accent', 'tertiary');
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
