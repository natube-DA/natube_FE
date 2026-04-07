import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should update query', () => {
    service.updateQuery('neo noir');
    expect(service.query()).toBe('neo noir');
  });

  it('should clear query', () => {
    service.updateQuery('creator');
    service.clear();
    expect(service.query()).toBe('');
  });
});
