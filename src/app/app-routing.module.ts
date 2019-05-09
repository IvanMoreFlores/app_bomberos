import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'confirmacion', loadChildren: './pages/confirmacion/confirmacion.module#ConfirmacionPageModule' },
  { path: 'error', loadChildren: './pages/error/error.module#ErrorPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'asistencia', loadChildren: './pages/asistencia/asistencia.module#AsistenciaPageModule' },
  { path: 'respuesta', loadChildren: './pages/respuesta/respuesta.module#RespuestaPageModule' },
  { path: 'notificacion', loadChildren: './pages/notificacion/notificacion.module#NotificacionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
