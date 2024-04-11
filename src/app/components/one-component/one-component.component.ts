import { Component } from '@angular/core';
import { TwoComponentComponent } from "../two-component/two-component.component";
import { IonNavLink, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-one-component',
  standalone: true,
  templateUrl: './one-component.component.html',
  imports: [IonNavLink, IonButton],
  styleUrls: ['./one-component.component.scss'],
})
export class OneComponentComponent {

  component = TwoComponentComponent;
  constructor() { }


}
