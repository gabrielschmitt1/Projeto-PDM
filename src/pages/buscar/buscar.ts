import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { BuscarFiltroPage } from '../buscar-filtro/buscar-filtro';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})

export class BuscarPage {

  items;
  descricao;
  constructor(public navCtrl: NavController, public app: App) {
    this.initializeItems();
  }

    initializeItems() {
      this.items = [
        'Outback',
        'Calaf',
        'Garota Carioca',
        'Divina Living',
        'Capela Lounge Bar'
      ];
      this.descricao = [
        'Outback Steakhouse é uma cadeia de restaurantes norte-americana de casual dining',
        'Bar do Calaf é símbolo da cultura boêmia de Brasília',
        'A Choperia Garota Carioca é uma choperia em Brasília inspirada nos bares das décadas de 50 e 60 do Rio de Janeiro',
        'O Divina Living Bar chega a Brasília com uma proposta mais ousada e que promete mudar o conceito dos bares da capital federal',
        'Só no Capella você encontra um ambiente perfeito para sua diversão'
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
    // metodo para acesso a pagina de filtro
    filtro(){
      this.navCtrl.push(BuscarFiltroPage);
    }
}
