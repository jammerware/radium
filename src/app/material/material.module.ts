import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...MATERIAL_MODULES,
    ]
})
export class MaterialModule { }
