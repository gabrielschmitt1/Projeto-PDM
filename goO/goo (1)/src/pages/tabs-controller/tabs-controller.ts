import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarPage } from '../buscar/buscar';
import { DescobrirPage } from '../descobrir/descobrir';
import { InteressesPage } from '../interesses/interesses';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BuscarPage;
  tab2Root: any = DescobrirPage;
  tab3Root: any = InteressesPage;
  tab4Root: any = ConfiguracoesPage;
  constructor(public navCtrl: NavController) {
  }
  
}
