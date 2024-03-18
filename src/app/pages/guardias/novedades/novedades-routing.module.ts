import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { RevisionesComponent } from './revisiones/revisiones.component';

const routes: Routes = [
  { path: "descuentos", component: DescuentosComponent },
  { path: "revisiones", component: RevisionesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovedadesRoutingModule { }
