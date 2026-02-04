import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { Apod } from '../../interfaces/nasa.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
//Desde este componente consumiremos el servicio de la NASA para mostrar las imagenes
export class Listado {

  //inyectamos el servicio de la NASA para poder usar sus metodos
  private nasaService=inject(NasaService);
  //inyectamos el router para navegar entre paginas
  private router=inject(Router);

  private cd =inject(ChangeDetectorRef);//eso sirve para despertar a angular si hay cambios

  apodList=signal<Apod[]>([]);//aqui guardaremos la lista de imagenes

  cargando=signal(false);//indicador de carga

  ngOnInit():void{this.cargarDatos();}//al iniciar el componente cargamos los datos


  cargarDatos(){
      this.cargando.set(true);//indicamos que estamos cargando


    //Asi es como se consume una promesa  en Angular
    this.nasaService.getApodList(12).subscribe({
      next: (data)=>{
        this.apodList.set(data);//seteamos la lista de imagenes

        this.cargando.set(false);//indicamos que ya no estamos cargando
        this.cd.detectChanges();//despertamos a angular para que detecte los cambios

        console.timeLog(`Datos de la Nasa: ${JSON.stringify(data)}`);
      },
      error: (error)=>{
        console.error('Error al obtener los datos de la NASA',error);
        this.cargando.set(false);//indicamos que ya no estamos cargando
        this.cd.detectChanges();
      },
    });
  }

  //navegamos a la pagina de detalle pasando la fecha como parametro
  verDetalle(date:string){this.router.navigate(['/detalle',date]);}
}
