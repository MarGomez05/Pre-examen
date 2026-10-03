import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PortadaComponent } from '../components/portada/portada.component';
import { PeliculasComponent } from '../components/peliculas/peliculas.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, PortadaComponent, PeliculasComponent]
})
export class Tab2Page {

  constructor() {}

}
