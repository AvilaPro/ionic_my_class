import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent, IonNavLink, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-three-component',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent, IonNavLink, IonButton],
  templateUrl: './three-component.component.html',
  styleUrls: ['./three-component.component.scss'],
})
export class ThreeComponentComponent {

  constructor() { }

}
