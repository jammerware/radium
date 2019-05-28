import { TestBed } from '@angular/core/testing';
import { RingService } from './rings.service';

describe('RingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RingService = TestBed.get(RingService);
    expect(service).toBeTruthy();
  });
});
