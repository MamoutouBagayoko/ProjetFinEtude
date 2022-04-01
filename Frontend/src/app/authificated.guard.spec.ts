import { TestBed } from '@angular/core/testing';

import { AuthificatedGuard } from './authificated.guard';

describe('AuthificatedGuard', () => {
  let guard: AuthificatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthificatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
