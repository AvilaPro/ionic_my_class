import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonItem, IonAvatar, IonList, IonItemSliding, IonItemOption, IonItemOptions, IonThumbnail, IonImg, IonBadge, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonText, IonToast, IonAlert, IonActionSheet, IonButton, IonChip, IonSegment, IonSegmentButton, IonNav } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, addCircle, home, pin, star, call, globe, basket, barbell, trash, person, caretForwardCircle } from "ionicons/icons";
import { LinksComponent } from "../components/links/links.component";
import { OneComponentComponent } from "../components/one-component/one-component.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonBadge, IonImg, IonItemOptions, IonItemOption, IonItemSliding, IonList, IonAvatar, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, NgFor, IonThumbnail, NgIf, NgClass, LinksComponent, IonToast, IonAlert, IonActionSheet, IonButton, IonChip, IonSegment, IonSegmentButton, IonNav],
})
export class HomePage {
  component = OneComponentComponent;

  isToastOpen: boolean = false;
  isAlertOpen:boolean = false;
  toastMessage:string = "";
  alertMessage:string = "Personaje seleccionado: ";
  itemSelected:boolean = false;
  public alertButtons = [
    {
      text: 'No quiero',
      role: 'cancel',
      handler: () => {
        console.log('Item despreciado');
      },
    },
    {
      text: 'Si lo quiero!',
      role: 'confirm',
      handler: () => {
        console.log('Item adquirido');
        this.itemSelected = true;
      },
    },
  ];

  actionSheetButtons = [
    {
      text: 'Configuracion',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'About Us',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  logoCadi : string = "https://app.cadif1.com/img/template/logo-cadi-blanco.svg";
  json: any;
  constructor() {
    addIcons({heart, addCircle, home, pin, star, call, globe, basket, barbell, trash, person, caretForwardCircle});
    this.obtenerChars();
  }

  setOpen(p: boolean, data:any){
    this.isToastOpen = p;
    this.toastMessage = data.name;
  }
  setOpenAlert(setter:boolean, data:any){
    this.isAlertOpen = setter;
    this.alertMessage += data.name;
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
