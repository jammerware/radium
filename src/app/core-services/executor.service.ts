import { Injectable } from '@angular/core';
import { RingItem } from '@/rings/models/ring-item';
import { RingItemType } from '@/rings/models/ring-item-type';
import { ElectronService } from '@/providers/electron.service';

@Injectable({ providedIn: 'root' })
export class ExecutorService {

    constructor(private electronService: ElectronService) { }

    execute(ringItem: RingItem) {
        if (ringItem.type === RingItemType.RingLink) {
            console.log('do ring link things?', ringItem.args);
            return;
        }
        else if (ringItem.type === RingItemType.Execute) {
            this.electronService.childProcess.exec(`"${ringItem.args[0]}"`, error => {
                console.log('error', error);
            });
        }
    }
}
