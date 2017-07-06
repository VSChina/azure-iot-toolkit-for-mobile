import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { DevicePage } from '../pages/device/device';
import { DeviceList } from '../pages/device-list/device-list';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { PublishPage } from '../pages/publish/publish';
import { SimulatePage } from '../pages/simulate/simulate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    DevicePage,
    DeviceList,
    SubscribePage,
    PublishPage,
    SimulatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    DevicePage,
    DeviceList,
    SubscribePage,
    PublishPage,
    SimulatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
