import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonLabel, IonIcon, IonItem, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, menu } from 'ionicons/icons';

import { Router } from "@angular/router";

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonLabel, IonIcon, IonItem, IonButtons, IonMenuButton, IonMenuToggle
  ]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) {
    addIcons({homeOutline,receiptOutline,menu});
   }

  ngOnInit() {
  }
  
  async navigate(path: string){
    await this.menuCtrl.toggle("registerMenu").then((res) => {
      if (!res) {
        this.router.navigate([path]);
      }
    }); 
  }

}
