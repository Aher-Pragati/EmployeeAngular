import { TestBed } from '@angular/core/testing';

import { UserAuthenticationGuardGuard } from './user-authentication-guard.guard';

describe('UserAuthenticationGuardGuard', () => {
  let guard: UserAuthenticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
