import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './Usuario/datos/datos.component';
import { LoginComponent } from './Usuario/login/login.component';
import { ReportesComponent } from './Usuario/resultados/reportes/reportes.component';
import { ResultadosComponent } from './Usuario/resultados/resultados.component';
import { SuccesComponent } from './Usuario/succes/succes.component';

const routes: Routes = [  
{path: '', redirectTo:'datos' , pathMatch:'full' },
{path:'datos', component:DatosComponent},

{
  path:'resultados', 
  component:ResultadosComponent,
  children:[]
},
{
  path:'reportes', 
  component:ReportesComponent,
  children:[]
},

{
  path:'login', 
  component:LoginComponent,
  children:[]
},

{
  path:'success',
  component:SuccesComponent,
  pathMatch:'full'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
