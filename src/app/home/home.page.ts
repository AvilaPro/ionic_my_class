import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonLabel, IonItem, IonMenuToggle } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { cartOutline, walletOutline, personOutline, homeOutline, receiptOutline } from 'ionicons/icons';

import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonLabel, IonItem, IonMenuToggle],
})
export class HomePage {
  constructor(private router: Router, private menuCtrl: MenuController) {
    addIcons({ cartOutline, walletOutline, personOutline, homeOutline, receiptOutline});
  }

  async navigate(path: string){
    await this.menuCtrl.toggle("mainMenu").then((res) => {
      if (!res) {
        this.router.navigate([path]);
      }
    }); 
  }
}
