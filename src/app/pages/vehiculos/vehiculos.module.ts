import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ChoferComponent } from './chofer/chofer.component';


@NgModule({
  declarations: [VehiculoComponent,ChoferComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
