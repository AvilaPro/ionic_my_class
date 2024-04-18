import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes
import { HeaderComponent } from "./components/header/header.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PersonajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {




}
