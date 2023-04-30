import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes-somos', component:QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegrantesComponent},
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
