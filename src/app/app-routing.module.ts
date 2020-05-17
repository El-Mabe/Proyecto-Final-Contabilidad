import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {DashboardComponent} from './public/dashboard/dashboard.component';
import {HomeComponent} from './public/home/home.component';
import { DepartamentosComponent } from './public/departamentos/departamentos.component';
import { DetalleDepartamentosComponent } from './public/detalle-departamentos/detalle-departamentos.component';
import { PartesComponent } from './public/partes/partes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'departamentos/:nombre',
        component: DepartamentosComponent,
        children:[
        ]
      },
      {
        path: ':detalle',
        component: DetalleDepartamentosComponent,
        children: [
          {
            path:':partes',
            component: PartesComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
