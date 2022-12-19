import { Component, Input, OnInit, Output } from '@angular/core';
import { EmitirDatosService } from 'src/app/Servicio/emitir-datos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  sustanciasQuimicas = {
    hojas_seguridad_sustancias_quimicas: '',
    sustancias_quimicas_etiquetadas: '',
    gafas_seguridad_guantes_nitrilo: '',
    sustancias_quimicas_almacenadas: '',
    observaciones: '',
    evidencias: [],
    contador: '',
    id: ''
  }

  peligrosElectricos = {
    cables_buen_estado_entubados: '',
    empalmes_conexiones_buen_estado: '',
    tomas_buen_estado_tapa_proteccion: '',
    cajas_breakers_sin_sobrecarga_senaladas: '',
    tableros_caja_breakers_sin_material_combustible: '',
    observaciones: '',
    evidencias: [],
    contador: ''
  }

  peligrosMecanicos = {
    equipos_herramientas_buen_estado: '',
    observaciones: '',
    evidencias: [],
    contador: ''
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
    evidencias: [],
    contador: ''
  }

  emergencias = {
    ruta_evacuacion_senalizada_libre_obstaculos: '',
    salida_emergencia_punto_encuentro_senalizadas_despejadas: '',
    lista_telefonos_emergencia_publicada_socializada: '',
    extintores_buen_estado_recargados_senalizados_libre_obstaculos: '',
    camilla_emergencia_buen_estado_cuello_inmovilizador: '',
    botiquin_buen_estado_elementos_necesarios: '',
    observaciones: '',
    evidencias: [],
    contador: ''
  }

  ordenAseo = {
    punto_venta_buen_estado_aseo_mantenimiento: '',
    archivadores_organizados_documento_libros_almacenados: '',
    observaciones: '',
    evidencias: [],
    contador: ''
  }

  saneamientoBasico = {
    puntos_ecologicos_residuos: '',
    guantes_nitrilo_caucho: '',
    cuarto_residuos_limpio: '',
    servicio_sanitario_optimas_condiciones: '',
    banos_papel_higienico_jabon_toallas_papeleras: '',
    insectos_roedores_fumigado_areas: '',
    observaciones: '',
    evidencias: [],
    contador: ''
  }


  dato: any;

  constructor(private emisor: EmitirDatosService) { }

  ngOnInit(): void {



  }

  valid: any;

  public datos(obj: any, para: any) {

    switch (para) {
      case "sustanciasQuimicas":
        this.sustanciasQuimicas = obj;
        break;
      case "peligrosElectricos":
        this.peligrosElectricos = obj;
        break;
      case "peligrosMecanicos":
        this.peligrosMecanicos = obj;
        break;
      case "peligrosLocativos":
        this.peligrosLocativos = obj;
        break;
      case "emergencias":
        this.emergencias = obj;
        break;
      case "ordenAseo":
        this.ordenAseo = obj;
        break;
      case "saneamientoBasico":
        this.saneamientoBasico = obj;
        break;
      default:
        break;
    }


    this.dato = para;

    console.log(this.sustanciasQuimicas);






  }



}
