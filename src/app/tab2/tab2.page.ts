import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCol, IonImg, IonGrid, IonRow } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonImg, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, NgFor]
})
export class Tab2Page {

  constructor(public servicioFoto: PhotoService) {
    addIcons({ camera });
    this.servicioFoto.cargarFoto();
  }

  tomarFoto(){
    this.servicioFoto.agregarFoto();
  }

}
