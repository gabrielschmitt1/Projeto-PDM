import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Welcome } from '../welcome/welcome';
import { AvaliacaoPage } from '../avaliacao/avaliacao';
import { SugestaoPage } from '../sugestao/sugestao';
import { SobrePage } from '../sobre/sobre';
import { MelhoriaPage } from '../melhoria/melhoria';
import { ContatoPage } from '../contato/contato';
import { TermosUsoPage } from '../termos-uso/termos-uso';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})
export class ConfiguracaoPage {

  constructor(public navCtrl: NavController, public app: App) {

  }
  welcome(){
    this.navCtrl.push(Welcome);
  }
  avaliacao(){
    this.navCtrl.push(AvaliacaoPage);
  }
  sugestao(){
    this.navCtrl.push(SugestaoPage);    
  }
  sobre(){
    this.navCtrl.push(SobrePage);    
  }
  melhoria(){
    this.navCtrl.push(MelhoriaPage);
  }
  contato(){
    this.navCtrl.push(ContatoPage);
  }
  termosUso(){
    this.navCtrl.push(TermosUsoPage);
  }
}
