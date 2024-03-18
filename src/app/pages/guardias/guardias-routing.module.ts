import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonoComponent } from './abono/abono.component';
import { GuardiaComponent } from './guardia/guardia.component';

const routes: Routes = [

  { path: "", component: GuardiaComponent },
  { path: "abono", component: AbonoComponent },
  { path: 'novedades', loadChildren: () => import('./novedades/novedades.module').then(m => m.NovedadesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiasRoutingModule { }
