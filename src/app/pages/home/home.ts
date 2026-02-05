import { Listado } from './../listado/listado';
import { Component, OnInit, inject,signal } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { Apod } from '../../interfaces/nasa.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private nasaService = inject(NasaService);

  ListaApod=signal<Apod[]>([]);

  ngOnInit(): void {
    this.nasaService.getApodList(10).subscribe({
      next: (data) => {
        this.ListaApod.set(data.slice(0,5));
      },
      error: (err) => {
        console.error('Error fetching APOD list:', err);
      }
    });
  }

}
