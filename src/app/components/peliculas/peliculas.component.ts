import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { 
  AlertController,
  IonList,
  IonCard,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonText,
} from '@ionic/angular';

interface Pelicula {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
}

interface RespuestaPeliculas {
  results: Pelicula[];
}

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  imports: [
    IonList,
    IonCard,
    IonCardTitle,
    IonIcon,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonText,
  ],
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  cargando = true;
  errorCarga = false;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private alertController: AlertController) {}

  async ngOnInit() {
    await this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    this.cargando = true;
    this.errorCarga = false;

    try {
      const response = await axios.get<RespuestaPeliculas>(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: '1f096c22da1b04f8ccaaa60db379e547',
            language: 'es-ES',
            page: 1,
          },
        },
      );

      this.peliculas = response.data.results;
    } catch (error) {
      this.errorCarga = true;
      console.error('Error al obtener las películas:', error);
    } finally {
      this.cargando = false;
    }
  }

  async mostrarDetalles(pelicula: Pelicula) {
    const alert = await this.alertController.create({
      header: pelicula.title,
      message: `
        <p><strong>Fecha de lanzamiento:</strong> ${pelicula.release_date}</p>
        <p><strong>Descripción:</strong> ${pelicula.overview}</p>
      `,
      buttons: ['Cerrar']
    });
    await alert.present();
  }
}
