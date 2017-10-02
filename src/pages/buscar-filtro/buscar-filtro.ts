import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-buscar-filtro',
  templateUrl: 'buscar-filtro.html',
})

export class BuscarFiltroPage {

  filtro;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.initializeFiltro();
  }
  
  initializeFiltro() {
    this.filtro = [
      'Bares',
      'Restaurantes',
      'Pizzarias',
      'Festas'
    ];
  }
  resetFilters() {
    // reset all of the toggles to be checked
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.filtro.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}