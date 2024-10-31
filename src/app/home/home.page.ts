import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from "ionicons";
import { menu, person } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, NgFor, RouterLink],
})
export class HomePage {
  productos: any;
  constructor() {
    addIcons({menu,person});
    this.getProducts();
  }

  getProducts(){
    fetch('https://fakestoreapi.com/products').
    then(response => response.json()).
    then(data => {
      this.productos = data
      console.log(this.productos);
    })
  }

}
