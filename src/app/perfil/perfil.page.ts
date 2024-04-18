import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNav } from '@ionic/angular/standalone';

//Componentes para navegar
import { OneComponentComponent } from "../components/one-component/one-component.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonNav, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage {

  component = OneComponentComponent;

  constructor() { }

}
