import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { PreferencesRoutes } from './preferences/preferences.routes';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: '', children: HomeRoutes },
            { path: 'preferences', children: PreferencesRoutes }
        ], { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
