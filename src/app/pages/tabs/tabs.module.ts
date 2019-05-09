import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Asistencia',
        loadChildren: '../asistencia/asistencia.module#AsistenciaPageModule'
      },
      {
        path: 'Primera_respuesta',
        loadChildren: '../respuesta/respuesta.module#RespuestaPageModule'
      },
      {
        path: 'Notificaciones',
        loadChildren: '../notificacion/notificacion.module#NotificacionPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
