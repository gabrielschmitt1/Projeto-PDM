import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})

export class SobrePage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController) {

  }

}
