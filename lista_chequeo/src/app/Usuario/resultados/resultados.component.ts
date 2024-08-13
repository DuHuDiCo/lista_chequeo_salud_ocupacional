import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DatosService } from 'src/app/Servicio/datos.service';
import { EmitirDatosService } from 'src/app/Servicio/emitir-datos.service';
import Swal from 'sweetalert2';
import { DatosComponent } from '../datos/datos.component';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  formatos: any = []

  @Output() emmiter = new EventEmitter<any>();

  fechas: any = {
    "inicial": "",
    "final": ""
  }

  constructor(private formatoService: DatosService, private emisor: EmitirDatosService) { }

  ngOnInit(): void {

    this.obtenerFormatos();
  }


  public obtenerFormatos() {

    // Obtener la fecha del primer día del mes actual
    const obtenerPrimerDiaDelMes = (): Date => {
      const fechaActual = new Date();
      return new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    };

    // Obtener la fecha del último día del mes actual
    const obtenerUltimoDiaDelMes = (): Date => {
      const fechaActual = new Date();
      return new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
    };

    // Uso de las funciones
    const primerDiaDelMes = obtenerPrimerDiaDelMes();
    const ultimoDiaDelMes = obtenerUltimoDiaDelMes();
    console.log(primerDiaDelMes);
    console.log(ultimoDiaDelMes);

    this.formatoService.obtenerFormatos(primerDiaDelMes, ultimoDiaDelMes).subscribe(
      (data: any) => {

        if (data != null || data != undefined) {


          let formatos = data;
          let formatosOk: any = []
          formatos.forEach((f: any) => {
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

          console.log(data);
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay Inspecciones realizadas!"
          });
        }

      }, (error: any) => {
        console.log(error);
      }
    );

  }


  public agregarContadores(objeto: any) {

    let keys: any = Object.keys(objeto).length - 3;
    let array: any = Object.values(objeto);
    let values = array.filter((w: any) => w === true).length

    let contador = values + "/" + keys
    return contador
  }


  public cambiarEstado(id: number) {
    this.formatoService.cambiarEstado(id).subscribe(
      (data: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Guardado Correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.formatos = this.formatos.filter((f: any) => f.id != id);
      }, (error: any) => {
        console.log(error);

      }
    )
  }



  generarReporte() {

    if (this.fechas.inicial == null || this.fechas.inicial == undefined || this.fechas.final == null || this.fechas.final == undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes Seleccionar las Fechas!"
      });
      return;
    }

    this.formatoService.generarReporte(new Date(this.fechas.inicial), new Date(this.fechas.final)).subscribe(
      (data: any) => {
        const dowloandLink = document.createElement('a');
        dowloandLink.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + data.ruta
        dowloandLink.download = data.nombreReporte
        dowloandLink.target = '_blank'

        document.body.appendChild(dowloandLink)
        dowloandLink.click()
        document.body.removeChild(dowloandLink)

        window.location.reload()

      }, (error: any) => {
        console.log(error);

      }
    )

  }


}
