import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent, IonNavLink, IonButton } from "@ionic/angular/standalone";

import { ThreeComponentComponent } from "../three-component/three-component.component";

@Component({
  selector: 'app-two-component',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent, IonNavLink, IonButton],
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.scss'],
})
export class TwoComponentComponent {

  component = ThreeComponentComponent;

  constructor() { }



}
