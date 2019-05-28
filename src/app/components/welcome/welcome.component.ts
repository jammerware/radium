import { Component, OnInit } from '@angular/core';
import { Ring } from '@/rings/models/ring';
import { RingsService } from '@/rings/services/rings.service';

@Component({
    selector: 'rad-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    rings: Ring[];

    constructor(private ringsService: RingsService) { }

    ngOnInit() {
        this.ringsService.getAll().subscribe(rings => {
            this.rings = rings;
            console.log('this.rings', this.rings);
        });
    }
}
