import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

  fluxo = { idFluxo:0, dtFluxo:"", tipo:"", descricao:"", valor:0 };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
      this.getCurrentData(navParams.get("idFluxo"));
  }

  getCurrentData(idFluxo) {
    this.sqlite.create({
      name: 'fluxos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM fluxo WHERE idFluxo=?', [idFluxo])
        .then(res => {
          if(res.rows.length > 0) {
            this.fluxo.idFluxo = res.rows.item(0).idFluxo;
            this.fluxo.dtFluxo = res.rows.item(0).dtFluxo;
            this.fluxo.tipo = res.rows.item(0).tipo;
            this.fluxo.descricao = res.rows.item(0).descricao;
            this.fluxo.valor = res.rows.item(0).valor;
          }
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  updateData() {
    this.sqlite.create({
      name: 'fluxos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE fluxo SET idFluxo=?,tipo=?,descricao=?,valor=? WHERE idFluxo=?',[this.fluxo.dtFluxo,this.fluxo.tipo,this.fluxo.descricao,this.fluxo.valor,this.fluxo.idFluxo])
        .then(res => {
          console.log(res);
          this.toast.show('Fluxo Atualizado!', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
