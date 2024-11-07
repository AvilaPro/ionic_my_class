import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { IonHeader, IonButtons, IonToolbar, IonButton, IonTitle, IonContent, IonItem, IonInput } from "@ionic/angular/standalone";

import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [IonInput, IonItem, IonContent, IonTitle, IonButton, IonToolbar, IonButtons, IonHeader, FormsModule],
  selector: 'app-modal-example',
  templateUrl: 'cart.component.html',
})
export class CartComponent {
  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
