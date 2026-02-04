import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos esto para leer la URL y navegar
import { NasaService } from '../../services/nasa.service';
import { Apod } from '../../interfaces/nasa.interface';
import { CommonModule,DatePipe } from '@angular/common'; // Para dar formato bonito a la fecha

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle implements OnInit {
  private route = inject(ActivatedRoute); // Para leer la URL
  private router = inject(Router);        // Para volver atrás
  private nasaService = inject(NasaService);

  apod=signal<Apod | undefined>(undefined);// Aquí guardaremos la imagen del día

  ngOnInit(){
    const date =this.route.snapshot.paramMap.get('date');// Leemos el parámetro 'date' de la URL
    if(date){
      this.nasaService.getApodByDate(date).subscribe({
        next: (data)=>{
          this.apod.set(data);// Seteamos la imagen del día
        },
        error: (error)=>{
          console.error('Error al obtener los datos de la NASA',error);
          this.router.navigate(['/listado']);// Si hay error, volvemos al listado
        }
      });
    }
  }

  volver(){
    this.router.navigate(['/listado']);// Navegamos de vuelta al listado
  }
}