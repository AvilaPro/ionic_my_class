import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenuToggle, IonIcon } from '@ionic/angular/standalone';

import { MenuController } from "@ionic/angular";

import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, menu } from 'ionicons/icons';

import { Swiper } from "swiper";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonMenuToggle, IonIcon]
})
export class ProductsPage implements OnInit {

  constructor(private menuCtrl: MenuController) {
    addIcons({homeOutline,receiptOutline,menu});
   }

   

  ngOnInit() {
  }

  async abrirMenu(): Promise<any>{
    this.menuCtrl.open("mainMenu")
  }

}
