import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


import { Store } from '@ngrx/store';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { vehiculosRegistrados } from './vehiculosRegistrados';
import { vehiculosWidgets } from './vehiculosWidgets';
import { choferesList } from './choferesList';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { cloneDeep } from 'lodash';
import { tiposVehiculos } from './tiposVehiculos';
import { DetallesTiposMantenimientos, tiposMantenimientos } from './tiposMantenimientos';
import { registroMantenimientos } from './registroMantenimientos';

interface MantenimientoInfo {
  tipoMantenimiento: string;
  objetivo: string;
  mantenimientos: DetalleMantenimiento[];
}
interface DetalleMantenimiento {
  tipoVehiculo: string;
  detalles: any[];
}
@Component({
  selector: 'app-vehiculo',

  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.scss'
})
export class VehiculoComponent {
  marketverviewChart: any;
  columnChart: any;
  mini6Chart: any;
  mini7Chart: any;
  salesList: any;
  vehiculosRegistradosList: any;
  vehiculosRegistrados: any;
  registroMantenimientos: any;
  registroMantenimientosList: any;
  choferesList: any;
  tiposVehiculosList: any;
  tiposMantenimientosList: any;
  tiposMantenimientosDetalleList: any = [];
  tickets: any;
  alltickets: any;
  totalChoferes: number = 3000;
  // Objeto para almacenar los tipos de vehículos y sus detalles
  vehiculosAgrupados: { [key: string]: any[] } = {};

  @ViewChild('productModal', { static: false }) productModal?: ModalDirective;
  productdetail: any;
  sortValue: any = 'Order Date';
  vehiculosWidgets: any;

  constructor(public store: Store, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.vehiculosRegistrados = vehiculosRegistrados;
    this.vehiculosRegistradosList = vehiculosRegistrados;
    this.registroMantenimientosList = registroMantenimientos;
    this.vehiculosRegistrados = cloneDeep(this.vehiculosRegistradosList.slice(0, 10));
    this.registroMantenimientos = cloneDeep(this.registroMantenimientosList.slice(0, 10));
    document.getElementById('elmLoader')?.classList.add('d-none')

    this.vehiculosWidgets = vehiculosWidgets;
    this.choferesList = choferesList;
    this.tiposVehiculosList = tiposVehiculos;
    this.tiposMantenimientosList = tiposMantenimientos;
    // this.tiposMantenimientosDetalleList = DetallesTiposMantenimientos;
    // Iterar sobre cada detalle y agruparlo por tipo de vehículo


    // console.log(this.tiposMantenimientosDetalleList);
    this.agruparMantenimiento();
    this.listForm = this.formBuilder.group({
      id: [''],
      img: [''],
      name: [''],
      category: ['', [Validators.required]],
      instructor: ['', [Validators.required]],
      lessons: ['', [Validators.required]],
      students: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  private agruparMantenimiento() {
    this.tiposMantenimientosDetalleList = DetallesTiposMantenimientos.reduce((acc: MantenimientoInfo[], curr) => {
      const existingIndex = acc.findIndex(item => item.tipoMantenimiento === curr.tipoMantenimiento.nombre);

      if (existingIndex !== -1) {
        const tipoVehiculoIndex = acc[existingIndex].mantenimientos.findIndex(vehiculo => vehiculo.tipoVehiculo === curr.tiposVehiculo.nombres);

        if (tipoVehiculoIndex !== -1) {
          acc[existingIndex].mantenimientos[tipoVehiculoIndex].detalles.push(curr);
        } else {
          acc[existingIndex].mantenimientos.push({
            tipoVehiculo: curr.tiposVehiculo.nombres,
            detalles: [curr]
          });
        }
      } else {
        acc.push({
          tipoMantenimiento: curr.tipoMantenimiento.nombre,
          objetivo: curr.tipoMantenimiento.objetivo,
          mantenimientos: [{
            tipoVehiculo: curr.tiposVehiculo.nombres,
            detalles: [curr]
          }]
        });
      }


      return acc;
    }, []);

    console.log(this.tiposMantenimientosDetalleList);
  }


  uploadedFiles: any[] = [];
  courses: any;
  @ViewChild('addCourse', { static: false }) addCourse?: ModalDirective;
  listForm!: UntypedFormGroup;

  // Edit Data
  editList(id: any) {
    this.uploadedFiles = [];
    this.addCourse?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Edit Product'
    var modalbtn = document.getElementById('add-btn') as HTMLAreaElement
    modalbtn.innerHTML = 'Update'
    var editData = this.courses[id]
    this.uploadedFiles.push({ 'dataURL': editData.img, 'name': editData.imgalt, 'size': 1024, });
    this.listForm.patchValue(this.courses[id]);
  }
  //  Filter Offcanvas Set
  openEnd() {
    document.getElementById('courseFilters')?.classList.add('show')
    document.querySelector('.backdrop3')?.classList.add('show')
  }

  deleteID: any;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;
  // Delete Product
  removeItem(id: any) {
    this.deleteID = id
    this.deleteRecordModal?.show()
  }
  term: any;
  courseList: any;
  masterSelected!: boolean;

  filterdata() {

    if (this.term) {
      this.courses = this.courseList.filter((el: any) => el.name.toLowerCase().includes(this.term.toLowerCase()))
    } else {
      this.courses = this.courseList.slice(0, 10)
    }
    // noResultElement
    this.updateNoResultDisplay();
  }
  // no result 
  updateNoResultDisplay() {
    const noResultElement = document.querySelector('.noresult') as HTMLElement;
    const paginationElement = document.getElementById('pagination-element') as HTMLElement
    if (this.term && this.courses.length === 0) {
      noResultElement.style.display = 'block';
      paginationElement.classList.add('d-none')
    } else {
      noResultElement.style.display = 'none';
      paginationElement.classList.remove('d-none')
    }
  }



  // Add Sorting
  direction: any = 'asc';
  sortKey: any = ''
  sortBy(column: any, value: any) {
    this.sortValue = value;
    this.onSort(column)
  }

  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    const sortedArray = [...this.vehiculosRegistrados]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.vehiculosRegistrados = sortedArray;
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  endItem: any;
  // pagechanged
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.vehiculosRegistrados = this.vehiculosRegistradosList.slice(startItem, this.endItem);
  }
}
