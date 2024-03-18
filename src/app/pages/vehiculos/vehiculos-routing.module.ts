import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ChoferComponent } from './chofer/chofer.component';

const routes: Routes = [
  {
    path: "vehiculo",
    component: VehiculoComponent
  },
  {
    path: "chofer",
    component: ChoferComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
