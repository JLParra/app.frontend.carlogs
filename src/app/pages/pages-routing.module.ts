import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'empresas', loadChildren: () => import('./empresas/empresas.module').then(m => m.EmpresasModule) },
  { path: 'guardias', loadChildren: () => import('./guardias/guardias.module').then(m => m.GuardiasModule) },
  { path: 'parametros', loadChildren: () => import('./parametros/parametros.module').then(m => m.ParametrosModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
