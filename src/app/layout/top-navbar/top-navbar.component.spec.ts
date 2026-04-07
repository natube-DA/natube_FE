import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TopNavbarComponent } from './top-navbar.component';
import { SearchService } from '../../core/services/search.service';

describe('TopNavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TopNavbarComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should update search query', () => {
    const fixture = TestBed.createComponent(TopNavbarComponent);
    const searchService = TestBed.inject(SearchService);

    fixture.componentInstance.onQueryChange({
      target: { value: 'fjord' }
    } as unknown as Event);

    expect(searchService.query()).toBe('fjord');
  });
});
