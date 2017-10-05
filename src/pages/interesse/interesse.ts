import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-interesse',
  templateUrl: 'interesse.html'
})

export class InteressePage {
  
  items;
  descricao;
  time;
  image;
  constructor(public navCtrl: NavController) {
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
    this.time = [
      '22:30',
      '21:40',
      '20:55',
      '23:00',
      '01:00',
    ];
    this.image = [
      '../assets/imgs/outback.png',
      '../assets/imgs/festa.jpg',
      '../assets/imgs/bar.jpg',
      '../assets/imgs/restaurante.png',
      '../assets/imgs/pizzaria.jpg'
    ]
  }

}
