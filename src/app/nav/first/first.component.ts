import { IonHeader, IonToolbar, IonContent, IonButton, IonTitle, IonNavLink, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

import { SecondComponent } from "../second/second.component";

import { addIcons } from "ionicons";
import { caretBackCircle } from "ionicons/icons";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonNavLink],
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent  implements OnInit {

  component = SecondComponent;

  constructor(private router: Router) {
    addIcons({caretBackCircle})
  }

  ngOnInit() {}

  navegar(path: string){
    this.router.navigate([path]);
  }

}
