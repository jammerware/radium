import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
    show(title: string, text: string) {
        const notification = new Notification(title, { body: text });
    }
}
