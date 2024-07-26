import { TestBed } from '@angular/core/testing';

import { ProgrammingDataService } from './programming-data.service';

describe('ProgrammingDataService', () => {
  let service: ProgrammingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
