import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { BuscarFiltroPage } from '../buscar-filtro/buscar-filtro';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})

export class BuscarPage {

  items;
  constructor(public navCtrl: NavController, public app: App) {
    this.initializeItems();
  }

    initializeItems() {
      this.items = [
        'Outback',
        'Calaf',
        'Garota Carioca',
        'Divina Lounge',
        'Capela'
      ];
    }
    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the ev target
      var val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    filtro(){
      this.navCtrl.push(BuscarFiltroPage);
    }
}
