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
import { AlterarSenhaPage } from '../pages/alterar-senha/alterar-senha';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

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
    AlterarSenhaPage,
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
    RegisterPage,
    MelhoriaPage,
    TermosUsoPage,
    AlterarSenhaPage,
    BuscarFiltroPage,
    ContatoPage,
    AvaliacaoPage,
    ConfiguracaoPage,
    BuscarPage,
    DescobrirPage,
    Welcome,
    Login,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {}
