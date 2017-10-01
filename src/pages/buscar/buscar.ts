import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {
  
  items;
  constructor(public navCtrl: NavController, public app: App) {
    this.initializeItems();
  }

  private isOn: boolean = false;
  
    getButtonText(): string {
      return `Switch ${ this.isOn ? 'Off' : 'On' }`;
    }
    setState(): void {
      this.isOn = !this.isOn;
    }
  
    toggleDetails() {
      this.isOn = !this.isOn;
    }

    logout(){
        // Remove API token 
        const root = this.app.getRootNav();
        root.popToRoot();
    }
    initializeItems() {
      this.items = [
        'Angular 1.x',
        'Angular 2',
        'ReactJS',
        'EmberJS',
        'Meteor',
        'Typescript',
        'Dart',
        'CoffeeScript'
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
}
