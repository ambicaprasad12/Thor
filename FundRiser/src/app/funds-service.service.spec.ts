import { TestBed } from '@angular/core/testing';

import { FundsServiceService } from './funds-service.service';

describe('FundsServiceService', () => {
  let service: FundsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
