import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    IntegrantesComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    // Es necesario importar el AppRouting module en cada uno de los componentes para que funcionen los links
    AppRoutingModule
  ],
  exports: [
    IntegrantesComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
