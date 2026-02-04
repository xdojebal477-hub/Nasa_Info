import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Listado } from './pages/listado/listado';
import { Detalle } from './pages/detalle/detalle';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {path:'home',component:Home},
  {path:'listado',component:Listado},
  {path:'detalle/:date',component:Detalle},//date es para el parametro para buscar las fotos por fecha
  {path:'contacto',component:Contacto},

  //rutas por defecto
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'/home'}

];
