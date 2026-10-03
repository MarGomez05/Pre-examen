import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarruselComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    register();
  }

}
