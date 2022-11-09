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


 
  public obtenerFormatos(){
    return this.http.get(`${base}/all`)
  }

  public obtenerAlmacenes(){
    return this.http.get(`${base}/almacenes`)
  }


}
