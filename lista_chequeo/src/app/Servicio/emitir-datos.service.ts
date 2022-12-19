import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitirDatosService {

  sustanciasQuimicas = {
    hojas_seguridad_sustancias_quimicas: '',
    sustancias_quimicas_etiquetadas: '',
    gafas_seguridad_guantes_nitrilo: '',
    sustancias_quimicas_almacenadas: '',
    observaciones: '',
    evidencias: [],
    contador:'',
    id:''
  }

  

  constructor() { }


  public getSustanciasQuimicas(){
    return this.sustanciasQuimicas;
  }

  public setSustanciasQuimicas(sustancias:any){
    this.sustanciasQuimicas = sustancias;
  }
}
