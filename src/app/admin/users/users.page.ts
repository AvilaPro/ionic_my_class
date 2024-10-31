import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonLabel, IonImg, IonThumbnail, IonBadge, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { addIcons } from "ionicons";
import { storefront, add } from "ionicons/icons";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBadge, IonImg, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonList, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonThumbnail, RouterLink, IonButton, IonButtons, NgFor]
})
export class UsersPage implements OnInit {

  users: Array<any> = [
    {
      id: {
        value: 1
      },
      name: {
        first: '',
        last: ''
      },
      dob: {
        age: 0
      },
      picture: {
        thumbnail: ''
      }
    }
  ];

  constructor() {
    addIcons({add,storefront});
    this.cargarUsuarios();
  }

  ngOnInit() {
  }

  cargarUsuarios(){
    //cargar del localstorage a los users
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

}
