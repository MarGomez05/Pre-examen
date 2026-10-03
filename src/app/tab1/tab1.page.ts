import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PortadaComponent } from '../components/portada/portada.component';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, PortadaComponent, CarruselComponent, FormularioComponent],
})
export class Tab1Page {
  constructor() {}
}
