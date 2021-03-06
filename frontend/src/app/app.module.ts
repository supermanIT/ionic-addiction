import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'
import {FormsModule} from '@angular/forms';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import { QRCodeModule } from 'angularx-qrcode';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(
            {
                mode: 'md'
            }
        ),
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        QRCodeModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        UniqueDeviceID,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
