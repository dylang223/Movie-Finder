import { TestBed } from '@angular/core/testing';

import { OmdbAService } from './omdb-a.service';

describe('OmdbAService', () => {
  let service: OmdbAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
