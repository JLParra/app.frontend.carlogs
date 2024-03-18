import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovedadesRoutingModule } from './novedades-routing.module';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { RevisionesComponent } from './revisiones/revisiones.component';


@NgModule({
  declarations: [DescuentosComponent,RevisionesComponent],
  imports: [
    CommonModule,
    NovedadesRoutingModule
  ]
})
export class NovedadesModule { }
