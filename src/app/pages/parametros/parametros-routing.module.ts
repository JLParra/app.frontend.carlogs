import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeriadosComponent } from './feriados/feriados.component';
import { MontoGuardiaComponent } from './monto-guardia/monto-guardia.component';

const routes: Routes = [
  { path: "feriados", component: FeriadosComponent },
  { path: "monto-guardia", component: MontoGuardiaComponent },
  { path: 'tipo', loadChildren: () => import('./tipo/tipo.module').then(m => m.TipoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
