import { TestBed } from '@angular/core/testing';
import { CreatorContentService } from './creator-content.service';

describe('CreatorContentService', () => {
  let service: CreatorContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorContentService);
  });

  it('should expose featured video', () => {
    expect(service.featuredVideo().title).toContain('Silence');
  });

  it('should expose lists for the page', () => {
    expect(service.recentUploads().length).toBeGreaterThan(0);
    expect(service.masterclasses().length).toBeGreaterThan(0);
    expect(service.shortFilms().length).toBeGreaterThan(0);
  });
});
