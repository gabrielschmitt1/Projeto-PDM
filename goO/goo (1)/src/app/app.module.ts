import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BuscarPage } from '../pages/buscar/buscar';
import { DescobrirPage } from '../pages/descobrir/descobrir';
import { InteressesPage } from '../pages/interesses/interesses';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BuscarPage,
    DescobrirPage,
    InteressesPage,
    TabsControllerPage,
    ConfiguracoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuscarPage,
    DescobrirPage,
    InteressesPage,
    TabsControllerPage,
    ConfiguracoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}