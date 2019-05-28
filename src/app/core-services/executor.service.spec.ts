import { TestBed } from '@angular/core/testing';

import { ExecutorService } from './executor.service';

describe('ExecutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecutorService = TestBed.get(ExecutorService);
    expect(service).toBeTruthy();
  });
});
