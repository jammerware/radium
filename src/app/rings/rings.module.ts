import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingComponent } from './components/ring/ring.component';
import { RingItemComponent } from './components/ring-item/ring-item.component';

@NgModule({
    declarations: [RingComponent, RingItemComponent],
    imports: [CommonModule],
    exports: [RingComponent],
})
export class RingsModule { }
