import { TestBed } from '@angular/core/testing';

import { TrayService } from './tray.service';

describe('TrayService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TrayService = TestBed.get(TrayService);
        expect(service).toBeTruthy();
    });
});
