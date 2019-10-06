import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@/material/material.module';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { NewRingDialogComponent } from './components/new-ring-dialog/new-ring-dialog.component';

@NgModule({
    declarations: [PreferencesComponent, NewRingDialogComponent],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    entryComponents: [NewRingDialogComponent],
})
export class PreferencesModule { }
