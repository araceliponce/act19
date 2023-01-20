import { TestBed } from '@angular/core/testing';

import { MusicservicesService } from './musicservices.service';

describe('MusicservicesService', () => {
  let service: MusicservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
