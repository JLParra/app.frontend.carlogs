import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { TVehiculoComponent } from './vehiculo/vehiculo.component';


const routes: Routes = [
  { path: "mantenimiento", component: MantenimientoComponent },
  { path: "vehiculo", component: TVehiculoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule { }
