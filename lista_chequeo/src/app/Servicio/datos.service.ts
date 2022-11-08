import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import base from  './url';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  public enviarResultados(enviar:any){
    return this.http.get(`${base}/all`,enviar)
  }
}
