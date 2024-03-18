import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardiasRoutingModule } from './guardias-routing.module';
import { AbonoComponent } from './abono/abono.component';
import { GuardiaComponent } from './guardia/guardia.component';


@NgModule({
  declarations: [AbonoComponent,GuardiaComponent],
  imports: [
    CommonModule,
    GuardiasRoutingModule
  ]
})
export class GuardiasModule { }
