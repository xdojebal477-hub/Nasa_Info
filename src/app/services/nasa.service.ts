import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../interfaces/nasa.interface';

/*
  Para poder  interactuar con la API, creamos un servicio que
  se encargue de hacer las peticiones HTTP
*/



/* con este decorador indicamos que este servicio
  se puede inyectar en cualquier parte de la aplicacion*/
@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private http = inject(HttpClient);//inyectamos el HttpClient para hacer peticiones HTTP

  private apiURL = 'https://api.nasa.gov/planetary/apod';//este endpoint es para astronomy picture of the day
  //  TODO:no hacer commit con la apiKey en el codigo fuente
  private apiKey = 'DEMO_KEY';//clave de la API de la NASA



  //Observable es un objeto promesa que nos permite manejar datos asincronos

  getApodByDate(date: string): Observable<Apod> {
    return this.http.get<Apod>(`${this.apiURL}?api_key=${this.apiKey}&date=${date}`);
  }//metodo para obtener la imagen por fecha
  getApodList(count: number): Observable<Apod[]> {
    return this.http.get<Apod[]>(`${this.apiURL}?api_key=${this.apiKey}&count=${count}`);
  }//metodo para obtener una lista de imagenes aleatorias

}
