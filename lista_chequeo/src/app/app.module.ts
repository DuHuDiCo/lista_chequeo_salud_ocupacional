import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './Usuario/datos/datos.component';
import { FileComponent } from './Usuario/file/file.component';
import { ResultadosComponent } from './Usuario/resultados/resultados.component';

import { LoginComponent } from './Usuario/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ModalComponent } from './Usuario/resultados/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    FileComponent,
    ResultadosComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
