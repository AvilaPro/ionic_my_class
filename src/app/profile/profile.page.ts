import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonAvatar, IonGrid, IonRow, IonCol, IonText, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';

import { addIcons } from "ionicons";
import { storefront, add } from "ionicons/icons";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonButtons, IonText, IonCol, IonRow, IonGrid, IonAvatar, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ProfilePage implements OnInit {

  usuario: any = {
    picture: '',
    name: {
      first: '',
      last: '',
      title: ''
    }
  };

  users: Array<any> = [];

  constructor() {
    //cargar del localstorage a users con los users existentes
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
    addIcons({add,storefront});
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    fetch("https://randomuser.me/api/").
    then(res => res.json()).
    then((data) => {
      this.usuario = data.results[0];
      console.log(this.usuario);
      this.users.push(this.usuario);
      //agregar users al localstorage
      localStorage.setItem('users', JSON.stringify(this.users));
    })
  }

  ngOnInit() {
  }

}
