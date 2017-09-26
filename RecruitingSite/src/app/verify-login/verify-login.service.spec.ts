import { TestBed, inject } from '@angular/core/testing';

import { VerifyLoginService } from './verify-login.service';

describe('VerifyLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyLoginService]
    });
  });

  it('should be created', inject([VerifyLoginService], (service: VerifyLoginService) => {
    expect(service).toBeTruthy();
  }));
});
