import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fluxos: any = [];
  rendaTotal = 0;
  gastoTotal = 0;
  saldo = 0;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {

  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name: 'fluxos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS fluxo(idFluxo INTEGER PRIMARY KEY, dtFluxo TEXT, tipo TEXT, descricao TEXT, valor INT)', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM fluxo ORDER BY idFluxo DESC', {})
      .then(res => {
        this.fluxos = [];
        for(var i=0; i<res.rows.length; i++) {
          this.fluxos.push({idFluxo:res.rows.item(i).idFluxo, dtFluxo:res.rows.item(i).dtFluxo, tipo:res.rows.item(i).tipo, descricao:res.rows.item(i).descricao, valor:res.rows.item(i).valor})
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(valor) AS rendaTotal FROM fluxo WHERE tipo="Renda"', {})
      .then(res => {
        if(res.rows.length>0) {
          this.rendaTotal = parseInt(res.rows.item(0).rendaTotal);
          this.saldo = this.rendaTotal-this.gastoTotal;
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(amount) AS gastoTotal FROM fluxo WHERE type="Gasto"', {})
      .then(res => {
        if(res.rows.length>0) {
          this.gastoTotal = parseInt(res.rows.item(0).gastoTotal);
          this.saldo = this.rendaTotal-this.gastoTotal;
        }
      })
    }).catch(e => console.log(e));
  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  editData(idFluxo) {
    this.navCtrl.push(EditDataPage, {
      idFluxo:idFluxo
    });
  }

  deleteData(idFluxo) {
    this.sqlite.create({
      name: 'fluxos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM fluxo WHERE idFluxo=?', [idFluxo])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
