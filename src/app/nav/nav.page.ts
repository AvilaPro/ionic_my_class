import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';

import { FirstComponent } from "./first/first.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class NavPage implements OnInit {

  component = FirstComponent;

  constructor() { }

  ngOnInit() {
  }

}
