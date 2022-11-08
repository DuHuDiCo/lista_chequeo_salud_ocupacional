import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './Usuario/datos/datos.component';
import { LoginComponent } from './Usuario/login/login.component';
import { ResultadosComponent } from './Usuario/resultados/resultados.component';

const routes: Routes = [  
{path: '', redirectTo:'datos' , pathMatch:'full' },
{path:'datos', component:DatosComponent},
{
  path:'resultados', 
  component:ResultadosComponent,
  children:[]
},
{
  path:'login', 
  component:LoginComponent,
  children:[]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
