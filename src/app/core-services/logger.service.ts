import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
    debug(message: string) {
        console.debug(message);
    }

    error(message: string) {
        console.error(message);
    }
}
