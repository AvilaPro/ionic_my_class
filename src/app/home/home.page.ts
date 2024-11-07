import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonChip, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';

import { CartComponent } from "./cart/cart.component";

import { addIcons } from "ionicons";
import { menu, person, cart, ban, add, map } from "ionicons/icons";

//Importamos el IonToastController
import { ToastController, AlertController, ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonSegmentButton, IonChip, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, NgFor, RouterLink, IonSegment, IonLabel, ],
})
export class HomePage {
  productos: any;
  message: string = "Mensaje en el Modal";

  constructor(private toastController: ToastController, private alertController: AlertController, private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) {
    addIcons({ menu, person, cart, ban, add, map });
    this.getProducts();
  }

  getProducts() {
    fetch('https://fakestoreapi.com/products').
      then(response => response.json()).
      then(data => {
        this.productos = data
        console.log(this.productos);
      })
  }

  //metodo asincrono que maneja la creacion de un toast
  async crearToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      position: 'top',
      color: 'tertiary',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          side: 'end',
          icon: 'cart',
          handler: () => {
            console.log('Confirm clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          side: 'end',
          icon: 'ban',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  //metodo para crear un alert con alertController
  async crearAlert(headerMsg: any, subHeaderMsg: any, msg: any) {
    const alert = await this.alertController.create({
      header: headerMsg,
      subHeader: 'Price: $' + subHeaderMsg,
      message: 'category: ' + msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: CartComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

}
