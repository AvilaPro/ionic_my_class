import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFabButton, IonIcon, IonFab, IonGrid, IonCol, IonImg, IonRow } from '@ionic/angular/standalone';
import { camera } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { FotoService } from '../services/foto.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonRow, IonImg, IonCol, IonGrid, IonFab, IonIcon, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class WalletPage implements OnInit {

  constructor(public foto: FotoService) {
    addIcons({ camera });
  }

  ngOnInit() {
    this.foto.loadSaved();
  }

  tomarFoto(){
    this.foto.agregarFotoAGaleria();
  }


}
