import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import base from  './url';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  public guardarFormato(formato:any){
    return this.http.post(`${base}/save`, formato);
  }


 
  public obtenerFormatos(fechaStart:any, fechaEnd:any){
    return this.http.get(`${base}/all?fechaStart=${fechaStart}&fechaEnd=${fechaEnd}`)
  }

  public obtenerAlmacenes(){
    return this.http.get(`${base}/almacenes`)
  }


  public cambiarEstado(id:number){
    return this.http.get(`${base}/cambiarEstado/${id}`)
  }

  generarReporte(fechaStart:any, fechaEnd:any){
    return this.http.get(`${base}/reporte/?fechaStart=${fechaStart}&fechaEnd=${fechaEnd}`)
  }

}
