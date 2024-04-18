import { Component, ViewChild } from '@angular/core';
import { TwoComponentComponent } from "../two-component/two-component.component";
import { IonNavLink, IonButton, IonTitle, IonHeader, IonToolbar, IonContent, IonInput, IonModal, IonButtons, IonItem } from "@ionic/angular/standalone";

import { NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { OverlayEventDetail } from "@ionic/core/components";

@Component({
  selector: 'app-one-component',
  standalone: true,
  templateUrl: './one-component.component.html',
  imports: [IonItem, IonButtons, IonModal, IonInput, IonContent, IonToolbar, IonHeader, IonTitle, IonNavLink, IonButton, FormsModule, NgIf],
  styleUrls: ['./one-component.component.scss'],
})
export class OneComponentComponent {

  @ViewChild(IonModal)
  modal!: IonModal;

  component = TwoComponentComponent;

  message = '';
  name:string = '';
  constructor() { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      if (ev.detail.data == '') {
        this.message = ''
      }else{
        this.message = `Categoria: ${ev.detail.data}!`;
      }
    }
  }


}
