import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {



  formatoInspeccion = {
    codigo: "",
    fecha: '',
    realizdoBy: '',
    fecha_inspeccion: '',
    punto_venta: '',
    sustanciasQuimicas: {},
    peligrosElectricos:{},
    peligrosMecanicos:{},
    peligrosLocativos:{},
    emergencias:{},
    ordenAseo:{},
    saneamientoBasico:{}
  }

  sustanciasQuimicas = {
    hojas_serguridad_sustancias_quimicas: false,
    sustancias_quimacas_etiquetadas: false,
    gafas_seguridad_guantes_nitrilo: false,
    sustancias_quimicas_almacenadas: false,
    observaciones: '',
    evidencias: []
  }

  peligrosElectricos = {
    cables_buen_estado_entubados: false,
    empalmes_conexiones_buen_estado: false,
    tomas_buen_estado_tapa_proteccion: false,
    cajas_breakers_sin_sobrecarga_señaladas: false,
    tableros_caja_breakers_sin_material_combustible: false,
    observaciones: '',
    evidencias: []
  }

  peligrosMecanicos = {
    equipos_herramientas_buen_estado: false,
    observaciones: '',
    evidencias: []
  }

  peligrosLocativos = {
    luminarias_buen_estado: false,
    muros_buen_estado: false,
    escaleras_buen_estado: false,
    pisos_buen_estado: false,
    ventanas_puertas_buen_estado: false,
    techos_buen_estado: false,
    areas_circulacion_despejadas: false,
    silla_escritorios_buen_estado: false,
    divisiones_modulares_escritorio_cajones_buenas_condiciones: false,
    observaciones: '',
    evidencias: []
  }

  emergencias = {
    ruta_evacuacion_señalizada_libre_obstaculos: false,
    salida_emergencia_punto_encuentro_señalizadas_despejadas: false,
    lista_telefonos_emergencia_publicada_socializada: false,
    extintores_buen_estado_recargados_señalizados_libre_obstaculos: false,
    camilla_emergencia_buen_estado_cuello_inmovilizador: false,
    botiquin_buen_estado_elementos_necesarios: false,
    observaciones: '',
    evidencias: []
  }

  ordenAseo = {
    punto_venta_buen_estado_aseo_mantenimiento: false,
    archivadores_organizados_documento_libros_almacenados: false,
    observaciones: '',
    evidencias: []
  }

  saneamientoBasico = {
    puntos_ecologicos_residuos: false,
    guantes_nitrilo_caucho: false,
    cuarto_residuos_limpio: false,
    servicio_sanitario_optimas_condiciones: false,
    baños_papel_higienico_jabon_toallas_papeleras: false,
    insectos_roedores_fumigado_areas: false,
    observaciones: false,
    evidencias: []
  }

  constructor() { }

  ngOnInit(): void {
  }


  print(){
    console.log(this.sustanciasQuimicas)
  }
}
