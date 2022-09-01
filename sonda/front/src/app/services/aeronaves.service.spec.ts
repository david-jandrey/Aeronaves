import { TestBed } from '@angular/core/testing';

import { AeronavesService } from './aeronaves.service';

describe('AeronavesService', () => {
  let service: AeronavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeronavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
