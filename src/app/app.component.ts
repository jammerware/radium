import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Tray } from 'electron';
import { AppConfig } from '../environments/environment';
import { TrayService } from './core-services/tray.service';

@Component({
    selector: 'rad-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private trayService: TrayService) {
        translate.setDefaultLang('en');
    }

    ngOnInit(): void {
        this.trayService.build();
    }
}
