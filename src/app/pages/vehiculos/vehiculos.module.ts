import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ChoferComponent } from './chofer/chofer.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [VehiculoComponent,ChoferComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule,
    VehiculosRoutingModule,
    SimplebarAngularModule,
    
  ]
})
export class VehiculosModule { }
