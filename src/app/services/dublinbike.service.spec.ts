import { TestBed } from '@angular/core/testing';

import { DublinbikeService } from './dublinbike.service';

describe('DublinbikeService', () => {
  let service: DublinbikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DublinbikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
