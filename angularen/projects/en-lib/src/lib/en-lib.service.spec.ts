import { TestBed } from '@angular/core/testing';

import { EnLibService } from './en-lib.service';

describe('EnLibService', () => {
  let service: EnLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
