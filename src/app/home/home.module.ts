import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RingsModule } from '@/rings/rings.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        RingsModule,
    ],
})
export class HomeModule { }
