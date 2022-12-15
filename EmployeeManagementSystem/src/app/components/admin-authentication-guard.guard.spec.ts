import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationGuardGuard } from './admin-authentication-guard.guard';

describe('AdminAuthenticationGuardGuard', () => {
  let guard: AdminAuthenticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAuthenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
