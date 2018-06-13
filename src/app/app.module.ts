import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {OrdersPage} from "../pages/orders/orders";
import {HttpClientModule} from "@angular/common/http";
import {OrderModal} from "../pages/home/order-modal/order-modal";
import {SplashPage} from "../pages/splash-page/splash-page";
import {DataProvider} from "../providers/data";
import {LoginModal} from "../pages/login-modal/login-modal";
import {QuantityModal} from "../pages/home/quantity-modal/quantity-modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersPage,
    LoginModal,
    OrderModal,
    SplashPage,
    QuantityModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SplashPage,
    MyApp,
    HomePage,
    OrdersPage,
    LoginModal,
    OrderModal,
    QuantityModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
