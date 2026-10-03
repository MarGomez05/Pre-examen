import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PortadaComponent } from '../components/portada/portada.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, PortadaComponent],
})
export class Tab3Page {
  constructor() {}
}
