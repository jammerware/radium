import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatDialogModule,
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
