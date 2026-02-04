//aqui modelamos las interfaces que usaremos para tipar los datos que recibimos de la API de la NASA

export interface Apod {
  date:string;
  explanation:string;
  hdurl?:string;
  media_type:string;
  service_version:string;
  title:string;
  url:string;
  copyright?:string;
}
