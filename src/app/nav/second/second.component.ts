import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonContent, IonButton, IonTitle, IonNavLink, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonNavLink],
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
