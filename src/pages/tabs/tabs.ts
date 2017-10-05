import { Component } from '@angular/core';
// Paginas
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { DescobrirPage } from '../descobrir/descobrir';
import { BuscarPage } from "../buscar/buscar";
import { InteressePage } from '../interesse/interesse';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = BuscarPage;
  tab2Root = DescobrirPage;
  tab3Root = InteressePage;
  tab4Root = ConfiguracaoPage;

  constructor() {

  }
}
