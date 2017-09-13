import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {

  constructor(public navCtrl: NavController, public app: App) {

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
}
