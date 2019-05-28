import { Component, OnInit, Input } from '@angular/core';
import { RingItem } from '@/rings/models/ring-item';
import { ExecutorService } from '@/core-services/executor.service';

@Component({
    selector: 'rad-ring-item',
    templateUrl: './ring-item.component.html',
    styleUrls: ['./ring-item.component.scss']
})
export class RingItemComponent implements OnInit {
    @Input() ringItem: RingItem;

    constructor(private executor: ExecutorService) { }

    ngOnInit() {
    }

    onClick() {
        console.log('the things');
        this.executor.execute(this.ringItem);
    }
}
