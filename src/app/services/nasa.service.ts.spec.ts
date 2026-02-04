import { TestBed } from '@angular/core/testing';

import { NasaServiceTs } from './nasa.service.ts';

describe('NasaServiceTs', () => {
  let service: NasaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
