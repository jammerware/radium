import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@/material/material.module';
import { RingsModule } from '@/rings/rings.module';

import { PreferencesComponent } from './components/preferences/preferences.component';
import { NewRingDialogComponent } from './components/new-ring-dialog/new-ring-dialog.component';
import { NewRingItemComponent } from './components/new-ring-item/new-ring-item.component';

@NgModule({
    declarations: [
        PreferencesComponent,
        NewRingDialogComponent,
        NewRingItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RingsModule,
    ],
    entryComponents: [
        NewRingDialogComponent,
        NewRingItemComponent,
    ],
})
export class PreferencesModule { }
