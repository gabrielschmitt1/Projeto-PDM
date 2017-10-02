import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Paginas
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { InteressePage } from '../pages/interesse/interesse';
import { SobrePage } from '../pages/sobre/sobre';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { BuscarPage } from '../pages/buscar/buscar';
import { DescobrirPage } from '../pages/descobrir/descobrir';
import { SugestaoPage } from '../pages/sugestao/sugestao';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { ContatoPage } from '../pages/contato/contato';
import { TermosUsoPage } from '../pages/termos-uso/termos-uso';
import { MelhoriaPage } from '../pages/melhoria/melhoria';
import { BuscarFiltroPage } from '../pages/buscar-filtro/buscar-filtro';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    RegisterPage,
    InteressePage,
    MelhoriaPage,
    TermosUsoPage,
    ContatoPage,
    SobrePage,
    BuscarFiltroPage,
    SugestaoPage,
    AvaliacaoPage,
    ConfiguracaoPage,
    BuscarPage,
    DescobrirPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InteressePage,
    SobrePage,
    SugestaoPage,
    MelhoriaPage,
    TermosUsoPage,
    BuscarFiltroPage,
    ContatoPage,
    AvaliacaoPage,
    ConfiguracaoPage,
    BuscarPage,
    DescobrirPage,
    Welcome,
    Login,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
