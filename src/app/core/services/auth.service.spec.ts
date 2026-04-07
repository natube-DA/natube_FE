import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
    service = TestBed.inject(AuthService);
  });

  it('should store token', () => {
    service.setAccessToken('demo-token');
    expect(service.getAccessToken()).toBe('demo-token');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should clear token on logout', () => {
    service.setAccessToken('demo-token');
    service.logout();
    expect(service.getAccessToken()).toBeNull();
    expect(service.isAuthenticated()).toBeFalse();
  });
});
