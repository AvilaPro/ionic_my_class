import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonItem, IonAvatar, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonThumbnail, IonImg, IonBadge, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from "ionicons/icons";
import { LinksComponent } from "../components/links/links.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonBadge, IonImg, IonItemOptions, IonItemOption, IonItemSliding, IonList, IonAvatar, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, NgFor, IonThumbnail, NgIf, NgClass, LinksComponent],
})
export class HomePage {
  logoCadi : string = "https://app.cadif1.com/img/template/logo-cadi-blanco.svg";
  json: any;
  constructor() {
    addIcons({heart});
    this.obtenerChars();
  }

  obtenerChars() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => {
        this.json = json.results;
        console.log(this.json)
      })
  }
}
