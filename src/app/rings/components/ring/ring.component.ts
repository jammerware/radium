import { Component, Input, OnInit } from '@angular/core';
import { Ring } from '@/rings/models/ring';

@Component({
    selector: 'rad-ring',
    templateUrl: './ring.component.html',
    styleUrls: ['./ring.component.scss']
})
export class RingComponent implements OnInit {
    @Input() ring: Ring;

    ngOnInit() {
    }
}
