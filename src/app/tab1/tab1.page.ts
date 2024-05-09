import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
  providers: [Flashlight]
})
export class Tab1Page {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public flashlight: Flashlight) {


    if(!this.flashlight.available()){
      alert("No hay linterna disponible");
    }
  }

  encenderLinterna(){
    console.log("suiche de linterna");
    this.flashlight.toggle();
  }

}
