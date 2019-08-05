import { Component, OnInit } from '@angular/core';
import { Ring } from '@/rings/models/ring';
import { RingsService } from '@/rings/services/rings.service';
import { MouseEventsService, MouseButtonEvent } from '@/core-services/mouse-events.service';

@Component({
    selector: 'rad-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    activeRing: Ring;
    rings: Ring[];
    private backStack: Ring[] = [];

    constructor(
        private mouseEventsService: MouseEventsService,
        private ringsService: RingsService) { }

    ngOnInit() {
        this
            .ringsService
            .activeRingChange
            .subscribe(r => this.changeRing(r));

        this.ringsService.getAll().subscribe(rings => {
            this.rings = rings;
            this.changeRing(rings.find(r => r.name === "Begin"));
            console.log('current ring', this.activeRing);
        });

        this
            .mouseEventsService
            .mouseButtonEvent
            .subscribe(event => {
                if (event === MouseButtonEvent.Right && this.backStack.length) {
                    const navTo = this.backStack.pop();
                    console.log('going back to', navTo);
                    this.activeRing = navTo;
                    console.log('active ring', this.activeRing);
                }
            });
    }

    private changeRing(ring: Ring) {
        if (this.activeRing) {
            this.backStack.push(this.activeRing);
        }

        this.activeRing = ring;
    }
}
