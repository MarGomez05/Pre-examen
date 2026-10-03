import { Component, OnInit } from '@angular/core';
import { 
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
 } from '@ionic/angular';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardSubtitle],
})

export class PortadaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
