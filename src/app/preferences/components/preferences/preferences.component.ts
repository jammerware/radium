import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RingsService } from '@/rings/services/rings.service';
import { Ring } from '@/rings/models/ring';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewRingDialogComponent } from '../new-ring-dialog/new-ring-dialog.component';

@Component({
    selector: 'rad-preferences',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
    rings$: Observable<Ring[]>;

    constructor(
        private matDialogService: MatDialog,
        private ringsService: RingsService) { }

    ngOnInit() {
        this.rings$ = this.ringsService.getAll();
    }

    newRingClick() {
        const dialogRef = this.matDialogService.open(NewRingDialogComponent, {
            width: '30vw',
        });

        dialogRef.afterClosed(result => {
            console.log('result', result);
        })
    }
}
