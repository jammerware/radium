import { Injectable, EventEmitter } from '@angular/core';

export enum MouseButtonEvent {
    Left = 0,
    Middle = 1,
    Right = 2,
}

@Injectable({ providedIn: 'root' })
export class MouseEventsService {
    public mouseButtonEvent = new EventEmitter<MouseButtonEvent>();

    constructor() {
        window.addEventListener('mousedown', (theEvent: MouseEvent) => {
            this.onMouseDown(this, theEvent);
        });
    }

    private onMouseDown(service: MouseEventsService, event: MouseEvent) {
        service.mouseButtonEvent.emit(event.button as MouseButtonEvent);
    }
}
