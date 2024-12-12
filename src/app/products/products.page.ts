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

//modulos de Network-Capacitor
import { Network, ConnectionStatus } from "@capacitor/network";

import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  providers: [Flashlight],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuToggle, IonIcon]
})
export class ProductsPage implements OnInit {
  luz: boolean = false;
  networkStatus: any;

  constructor(private menuCtrl: MenuController, public linterna: Flashlight, private toastController: ToastController) {
    addIcons({menu,flashlight,homeOutline,receiptOutline});

    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
        console.log(this.networkStatus);
      })
    }
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      this.presentToast('bottom', status);
    })
   }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: ConnectionStatus){
    const toast = await this.toastController.create({
      message: 'Conectado: ' + msg.connected + '; tipo de conexion: ' + msg.connectionType,
      position: position,
      duration: 4000,
    });
    await toast.present();
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
