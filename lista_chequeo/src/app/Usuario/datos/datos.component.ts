import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  archivo = {
    "archivo": '',
    "ruta": ''
  }


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public file(event: any, name: any, cate: any) {
    var img = event.target.files[0];
    this.extraerBase64(img).then((imagen: any) => {
      this.archivo.ruta = imagen.base;
      this.archivo.archivo = name + ".jpg";
      switch (cate) {
        case "sustanciasQuimicas":
          let file = this.archivo;
          (this.sustanciasQuimicas.evidencias as any[]).push(file);


          break;
        case "peligrosElectricos":
          (this.peligrosElectricos.evidencias as any[]).push(this.archivo);

          break;
        case "peligrosMecanicos":
          (this.peligrosMecanicos.evidencias as any[]).push(this.archivo);
          break;
        case "peligrosLocativos":
          (this.peligrosLocativos.evidencias as any[]).push(this.archivo);
          break;
        case "emergencias":
          (this.emergencias.evidencias as any[]).push(this.archivo);
          break;
        case "ordenAseo":
          (this.ordenAseo.evidencias as any[]).push(this.archivo);
          break;
        case "saneamientoBasico":
          (this.saneamientoBasico.evidencias as any[]).push(this.archivo);
          break;

      }
    })

    this.archivo = {
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

    console.log(this.formatoInspeccion)

  }




}
