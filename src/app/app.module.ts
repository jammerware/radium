import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ElectronService } from '@/core-services/electron.service';

// user stuff
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { PreferencesModule } from './preferences/preferences.module';
import { RingsModule } from './rings/rings.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        SharedModule,
        AppRoutingModule,
        HomeModule,
        PreferencesModule,
        RingsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})
export class AppModule { }
