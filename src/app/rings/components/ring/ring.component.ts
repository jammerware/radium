import { Component, Input, OnInit } from '@angular/core';
import { Ring } from '@/rings/models/ring';
import { RingItem } from '@/rings/models/ring-item';

@Component({
    selector: 'rad-ring',
    templateUrl: './ring.component.html',
    styleUrls: ['./ring.component.scss']
})
export class RingComponent implements OnInit {
    @Input() preview = false;
    @Input() ring: Ring;

    ngOnInit() {
    }
}
