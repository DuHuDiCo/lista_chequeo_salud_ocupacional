import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DatosService } from 'src/app/Servicio/datos.service';
import { EmitirDatosService } from 'src/app/Servicio/emitir-datos.service';
import { DatosComponent } from '../datos/datos.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  formatos:any = []

  @Output() emmiter = new EventEmitter<any>();

  constructor(private formatoService:DatosService, private emisor:EmitirDatosService) { }

  ngOnInit(): void {

    this.obtenerFormatos();
  }


  public obtenerFormatos(){

    this.formatoService.obtenerFormatos().subscribe(
      (data:any)=>{
        let formatos = data;
        let formatosOk:any = []
        formatos.forEach((f:any) => {
          f.sustanciasQuimicas.contador = this.agregarContadores(f.sustanciasQuimicas);
          f.peligrosElectricos.contador = this.agregarContadores(f.peligrosElectricos);
          f.peligrosMecanicos.contador = this.agregarContadores(f.peligrosMecanicos);
          f.peligrosLocativos.contador = this.agregarContadores(f.peligrosLocativos);
          f.emergencias.contador = this.agregarContadores(f.emergencias);
          f.ordenAseo.contador = this.agregarContadores(f.ordenAseo);
          f.saneamientoBasico.contador = this.agregarContadores(f.saneamientoBasico);
          formatosOk.push(f);
        });
        this.formatos = formatosOk;
        
        
      },(error:any)=>{
        console.log(error);
      }
    );

  }


  public agregarContadores(objeto:any){
    
    let keys:any = Object.keys(objeto).length - 3;
    let array:any = Object.values(objeto);
    let values = array.filter((w:any)=> w === true).length
    
    let contador = values+"/"+keys
    return contador    
  }

  

 

}
