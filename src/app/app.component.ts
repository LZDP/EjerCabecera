import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera1/cabecera.component";
import { Cabecera2Component } from "./cabecera2/cabecera2.component";
import { Cabecera3Component } from './cabecera3/cabecera3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, Cabecera2Component, Cabecera3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerCabecera';
}
