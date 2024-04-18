import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonInput, IonButton } from '@ionic/angular/standalone';

import { RouterModule } from "@angular/router";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { register } from "swiper/element/bundle";

register();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage {

  constructor() { }

}
