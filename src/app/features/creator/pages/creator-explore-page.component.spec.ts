import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CreatorExplorePageComponent } from './creator-explore-page.component';
import { SearchService } from '../../../core/services/search.service';

describe('CreatorExplorePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorExplorePageComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CreatorExplorePageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should clear the search query', () => {
    const fixture = TestBed.createComponent(CreatorExplorePageComponent);
    const searchService = TestBed.inject(SearchService);

    searchService.updateQuery('neon');
    fixture.componentInstance.clearSearch();

    expect(searchService.query()).toBe('');
  });
});
