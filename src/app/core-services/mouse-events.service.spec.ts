import { TestBed } from '@angular/core/testing';

import { MouseEventsService } from './mouse-events.service';

describe('MouseEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouseEventsService = TestBed.get(MouseEventsService);
    expect(service).toBeTruthy();
  });
});
