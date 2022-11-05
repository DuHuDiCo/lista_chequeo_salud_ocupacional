import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './Usuario/datos/datos.component';
import { FileComponent } from './Usuario/file/file.component';
import { ResultadosComponent } from './Usuario/resultados/resultados.component';
import { ModalComponent } from './Usuario/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    FileComponent,
    ResultadosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
