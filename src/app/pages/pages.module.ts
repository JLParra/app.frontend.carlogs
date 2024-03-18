import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// page route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SimplebarAngularModule,
    SharedModule,
    
  ]
})
export class PagesModule { }
