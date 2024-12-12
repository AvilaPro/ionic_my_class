import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenuToggle, IonIcon, IonButton } from '@ionic/angular/standalone';

import { MenuController } from "@ionic/angular";

import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, menu, flashlight } from 'ionicons/icons';

import { Swiper } from "swiper";

// import { CapacitorFlash, CapacitorFlashPlugin } from '@capgo/capacitor-flash'
import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  providers: [Flashlight],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonMenuToggle, IonIcon]
})
export class ProductsPage implements OnInit {
  luz: boolean = false;

  constructor(private menuCtrl: MenuController, public linterna: Flashlight) {
    addIcons({menu,flashlight,homeOutline,receiptOutline});
   }

  encenderLuz(){
    this.luz = !this.luz;

    if (this.luz) {
      this.linterna.switchOn();
      // CapacitorFlash.switchOn({});
    } else {
      this.linterna.switchOff();
      // CapacitorFlash.switchOff();
    }
  }


  ngOnInit() {
  }

  async abrirMenu(): Promise<any>{
    this.menuCtrl.open("mainMenu")
  }

}
