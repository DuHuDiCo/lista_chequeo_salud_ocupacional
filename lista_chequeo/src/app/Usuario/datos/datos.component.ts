import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatosService } from 'src/app/Servicio/datos.service';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {



  formatoInspeccion = {
    codigo: "",
    fecha: '2021-03-01',
    realizdoBy: '',
    fecha_inspeccion: '',
    punto_venta: '',
    sustanciasQuimicas: {},
    peligrosElectricos: {},
    peligrosMecanicos: {},
    peligrosLocativos: {},
    emergencias: {},
    ordenAseo: {},
    saneamientoBasico: {}
  }

  sustanciasQuimicas = {
    hojas_seguridad_sustancias_quimicas: '',
    sustancias_quimicas_etiquetadas: '',
    gafas_seguridad_guantes_nitrilo: '',
    sustancias_quimicas_almacenadas: '',
    observaciones: '',
    evidencias: []
  }

  peligrosElectricos = {
    cables_buen_estado_entubados: '',
    empalmes_conexiones_buen_estado: '',
    tomas_buen_estado_tapa_proteccion: '',
    cajas_breakers_sin_sobrecarga_senaladas: '',
    tableros_caja_breakers_sin_material_combustible: '',
    observaciones: '',
    evidencias: []
  }

  peligrosMecanicos = {
    equipos_herramientas_buen_estado: '',
    observaciones: '',
    evidencias: []
  }

  peligrosLocativos = {
    luminarias_buen_estado: '',
    muros_buen_estado: '',
    escaleras_buen_estado: '',
    pisos_buen_estado: '',
    ventanas_puertas_buen_estado: '',
    techos_buen_estado: '',
    areas_circulacion_despejadas: '',
    silla_escritorios_buen_estado: '',
    divisiones_modulares_escritorio_cajones_buenas_condiciones: '',
    observaciones: '',
    evidencias: []
  }

  emergencias = {
    ruta_evacuacion_senalizada_libre_obstaculos: '',
    salida_emergencia_punto_encuentro_senalizadas_despejadas: '',
    lista_telefonos_emergencia_publicada_socializada: '',
    extintores_buen_estado_recargados_senalizados_libre_obstaculos: '',
    camilla_emergencia_buen_estado_cuello_inmovilizador: '',
    botiquin_buen_estado_elementos_necesarios: '',
    observaciones: '',
    evidencias: []
  }

  ordenAseo = {
    punto_venta_buen_estado_aseo_mantenimiento: '',
    archivadores_organizados_documento_libros_almacenados: '',
    observaciones: '',
    evidencias: []
  }

  saneamientoBasico = {
    puntos_ecologicos_residuos: '',
    guantes_nitrilo_caucho: '',
    cuarto_residuos_limpio: '',
    servicio_sanitario_optimas_condiciones: '',
    banos_papel_higienico_jabon_toallas_papeleras: '',
    insectos_roedores_fumigado_areas: '',
    observaciones: '',
    evidencias: []
  }

  evidencia = {
    "archivo": '',
    "ruta": ''
  }


  constructor(private sanitizer: DomSanitizer, private formatoService: DatosService, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  public file(event: any, name: any, cate: any) {
    var img = event.target.files[0];
    this.extraerBase64(img).then((imagen: any) => {
      this.evidencia.ruta = imagen.base;
      this.evidencia.archivo = name + ".jpg";
      switch (cate) {
        case "sustanciasQuimicas":
          let file = this.evidencia;
          (this.sustanciasQuimicas.evidencias as any[]).push(file);


          break;
        case "peligrosElectricos":
          (this.peligrosElectricos.evidencias as any[]).push(this.evidencia);

          break;
        case "peligrosMecanicos":
          (this.peligrosMecanicos.evidencias as any[]).push(this.evidencia);
          break;
        case "peligrosLocativos":
          (this.peligrosLocativos.evidencias as any[]).push(this.evidencia);
          break;
        case "emergencias":
          (this.emergencias.evidencias as any[]).push(this.evidencia);
          break;
        case "ordenAseo":
          (this.ordenAseo.evidencias as any[]).push(this.evidencia);
          break;
        case "saneamientoBasico":
          (this.saneamientoBasico.evidencias as any[]).push(this.evidencia);
          break;

      }
    })

    this.evidencia = {
      "archivo": '',
      "ruta": ''
    }



  }
  print() {
    console.log(this.sustanciasQuimicas)
  }


  public extraerBase64 = async ($event: any) => new Promise((resolve, reject): any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })


  public guardarFormato() {
    this.formatoInspeccion.sustanciasQuimicas = this.sustanciasQuimicas;
    this.formatoInspeccion.peligrosElectricos = this.peligrosElectricos;
    this.formatoInspeccion.peligrosMecanicos = this.peligrosMecanicos;
    this.formatoInspeccion.peligrosLocativos = this.peligrosLocativos;
    this.formatoInspeccion.emergencias = this.emergencias;
    this.formatoInspeccion.ordenAseo = this.ordenAseo;
    this.formatoInspeccion.saneamientoBasico = this.saneamientoBasico;

    if (this.sustanciasQuimicas.gafas_seguridad_guantes_nitrilo == '' || this.sustanciasQuimicas.hojas_seguridad_sustancias_quimicas == '' || this.sustanciasQuimicas.sustancias_quimicas_almacenadas == '' || this.sustanciasQuimicas.sustancias_quimicas_etiquetadas == '') {
      this.toast.error({
        detail: "Error",
        summary: "Existen datos Vacios",
        position: "br",
        duration: 3500
      })
    } else {
      if (this.peligrosElectricos.cables_buen_estado_entubados == '' || this.peligrosElectricos.cajas_breakers_sin_sobrecarga_senaladas == '' || this.peligrosElectricos.empalmes_conexiones_buen_estado == '' || this.peligrosElectricos.tableros_caja_breakers_sin_material_combustible == '' || this.peligrosElectricos.tomas_buen_estado_tapa_proteccion == '') {
        this.toast.error({
          detail: "Error",
          summary: "Existen datos Vacios",
          position: "br",
          duration: 3500
        })
      } else {
        if (this.peligrosMecanicos.equipos_herramientas_buen_estado == '') {
          this.toast.error({
            detail: "Error",
            summary: "Existen datos Vacios",
            position: "br",
            duration: 3500
          })
        } else {
          if (this.peligrosLocativos.areas_circulacion_despejadas == '' || this.peligrosLocativos.divisiones_modulares_escritorio_cajones_buenas_condiciones == '' || this.peligrosLocativos.escaleras_buen_estado == '' || this.peligrosLocativos.luminarias_buen_estado == '' || this.peligrosLocativos.muros_buen_estado == '' || this.peligrosLocativos.pisos_buen_estado == '' || this.peligrosLocativos.silla_escritorios_buen_estado == '' || this.peligrosLocativos.techos_buen_estado == '' || this.peligrosLocativos.ventanas_puertas_buen_estado == '') {
            this.toast.error({
              detail: "Error",
              summary: "Existen datos Vacios",
              position: "br",
              duration: 3500
            })

          } else {
            if (this.emergencias.botiquin_buen_estado_elementos_necesarios == '' || this.emergencias.camilla_emergencia_buen_estado_cuello_inmovilizador == '' || this.emergencias.extintores_buen_estado_recargados_senalizados_libre_obstaculos == '' || this.emergencias.lista_telefonos_emergencia_publicada_socializada == '' || this.emergencias.ruta_evacuacion_senalizada_libre_obstaculos == '' || this.emergencias.salida_emergencia_punto_encuentro_senalizadas_despejadas == '') {
              this.toast.error({
                detail: "Error",
                summary: "Existen datos Vacios",
                position: "br",
                duration: 3500
              })
            } else {
              if (this.ordenAseo.archivadores_organizados_documento_libros_almacenados == '' || this.ordenAseo.punto_venta_buen_estado_aseo_mantenimiento == '') {
                this.toast.error({
                  detail: "Error",
                  summary: "Existen datos Vacios",
                  position: "br",
                  duration: 3500
                })
              } else {
                if (this.saneamientoBasico.banos_papel_higienico_jabon_toallas_papeleras == '' || this.saneamientoBasico.cuarto_residuos_limpio == '' || this.saneamientoBasico.guantes_nitrilo_caucho == '' || this.saneamientoBasico.insectos_roedores_fumigado_areas == '' || this.saneamientoBasico.puntos_ecologicos_residuos == '' || this.saneamientoBasico.servicio_sanitario_optimas_condiciones == '') {
                  this.toast.error({
                    detail: "Error",
                    summary: "Existen datos Vacios",
                    position: "br",
                    duration: 3500
                  })
                } else {
                  this.guardarServices();

                }
              }
            }
          }
        }
      }
    }


  }


  private guardarServices() {
    this.formatoService.guardarFormato(this.formatoInspeccion).subscribe(
      (data: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Formato Guardado Correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(data);

      }, (error: any) => {

        this.toast.error({
          detail: "Error",
          summary: "Hubo un error",
          position: "br",
          duration: 3500
        })
        console.log(error)
      }
    );
  }




}
