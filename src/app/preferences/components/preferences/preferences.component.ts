import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RingsService } from '@/rings/services/rings.service';
import { Ring } from '@/rings/models/ring';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewRingDialogComponent } from '../new-ring-dialog/new-ring-dialog.component';
import { NewRingItemComponent } from '../new-ring-item/new-ring-item.component';

@Component({
    selector: 'rad-preferences',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
    selectedRing?: Ring;
    rings$: Observable<Ring[]>;

    constructor(
        private matDialogService: MatDialog,
        private ringsService: RingsService) { }

    ngOnInit() {
        this.rings$ = this.ringsService.getAll();
        this.ringsService.newItem.subscribe(this.newRingItem);
    }

    private newRingItem(ring: Ring) {
        this.ringsService.newItem.subscribe(ring => {
            const dialogRef = this.matDialogService.open(NewRingItemComponent, {
                width: '30vw'
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('new ring item', result);
            });
        });
    }

    newRingClick() {
        const dialogRef = this.matDialogService.open(NewRingDialogComponent, {
            width: '30vw',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('result', result);
        });
    }
}
