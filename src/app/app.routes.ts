import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'listado',component:ListadoComponent},
  {path:'detalle/:date',component:DetalleComponent},//date es para el parametro para buscar las fotos por fecha
  {path:'contacto',component:ContactoComponent},

  //rutas por defecto
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'/home'}

];
