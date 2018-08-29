import { TestBed, async, inject } from '@angular/core/testing';

import { AllowResetPasswordGuard } from './allow-reset-password.guard';

describe('AllowResetPasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowResetPasswordGuard]
    });
  });

  it('should ...', inject([AllowResetPasswordGuard], (guard: AllowResetPasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
