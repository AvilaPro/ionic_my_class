import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenuToggle, IonIcon, IonButton, IonAlert, IonToast } from '@ionic/angular/standalone';

import { MenuController } from "@ionic/angular";

import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, menu, flashlight, heart } from 'ionicons/icons';

import { Swiper } from "swiper";

// import { CapacitorFlash, CapacitorFlashPlugin } from '@capgo/capacitor-flash'
import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";

//modulos de Network-Capacitor
import { Network, ConnectionStatus } from "@capacitor/network";

import { ToastController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  providers: [Flashlight],
  standalone: true,
  imports: [IonToast, IonAlert, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuToggle, IonIcon]
})
export class ProductsPage implements OnInit {
  luz: boolean = false;
  networkStatus: any;

  alertButtons = ['Action'];

  isToastOpen = false;


  constructor(private menuCtrl: MenuController, public linterna: Flashlight, private toastController: ToastController, private alertController: AlertController) {
    addIcons({menu,flashlight,homeOutline,receiptOutline, heart});
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: ConnectionStatus){
    const toast = await this.toastController.create({
      message: 'Conectado: ' + msg.connected + '; tipo de conexion: ' + msg.connectionType,
      position: position,
      duration: 4000,
    });
    await toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
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
    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
        console.log(this.networkStatus);
      })
    }
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      this.setOpen(true);
    }).then(() => {
    })
  }

  async abrirMenu(): Promise<any>{
    this.menuCtrl.open("mainMenu")
  }

}
