import { Component, ElementRef } from '@angular/core';
import { NgFor, NgIf, NgClass } from "@angular/common";

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [ NgFor, NgIf, NgClass],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  mostrar = false;

  seleccionados = [];

  json: any;

  constructor(){
    this.obtenerChars()
  }

  obtenerChars() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => {
        this.json = json.results;
        console.log(this.json)
      })
  }

  infoCard(data: any) {
    console.log(data);
    if (data.getAttribute("seleccionado")) {
      data.removeAttribute("seleccionado");
      data.setAttribute("style", "border: solid lightgray");
    }else{
      data.setAttribute("style", "border: solid pink 3px");
      data.setAttribute("seleccionado", "true");
    }
  }
}
