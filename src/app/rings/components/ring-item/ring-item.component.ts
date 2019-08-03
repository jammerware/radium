import { Component, OnInit, Input } from '@angular/core';
import { RingItem } from '@/rings/models/ring-item';
import { RingsService } from '@/rings/services/rings.service';
import { RingItemType } from '@/rings/models/ring-item-type';

@Component({
    selector: 'rad-ring-item',
    templateUrl: './ring-item.component.html',
    styleUrls: ['./ring-item.component.scss']
})
export class RingItemComponent implements OnInit {
    @Input() ringItem: RingItem;
    iconSrc: string;

    constructor(private ringsService: RingsService) { }

    async ngOnInit() {
        this.iconSrc = this.ringItem.icon;
        if (this.ringItem.type === RingItemType.RingLink && !this.iconSrc) {
            const ring = await this.ringsService.get(this.ringItem.args[0]).toPromise();
            this.iconSrc = ring.icon;
        }
    }

    onClick() {
        this.ringsService.execute(this.ringItem);
    }
}
