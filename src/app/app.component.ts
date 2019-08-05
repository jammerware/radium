import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElectronService } from '@/core-services/electron.service';
import { AppConfig } from '../environments/environment';

@Component({
    selector: 'rad-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        public electronService: ElectronService,
        private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}
