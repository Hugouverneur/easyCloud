import { TestBed } from '@angular/core/testing';

import { PowereshellService } from './powereshell.service';

describe('PowereshellService', () => {
  let service: PowereshellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowereshellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
