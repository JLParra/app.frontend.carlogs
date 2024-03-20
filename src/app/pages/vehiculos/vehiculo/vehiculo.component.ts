import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { circle, latLng, tileLayer } from 'leaflet';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { shuffleArray } from 'src/app/shared/commonFunction';
import { Store } from '@ngrx/store';
import { fetchorderData, fetchsalesData } from 'src/app/store/Ecommerce/ecommerce.actions';
import { selectData, selectorderata, selectproductData } from 'src/app/store/Ecommerce/ecommerce-selector';
import { products } from './data';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { vehiculosRegistrados } from './vehiculosRegistrados';
import { supportList } from './supportList';
import { choferesList } from './choferesList';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { clone, cloneDeep } from 'lodash';


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
  choferesList: any;
  tickets: any;
  alltickets: any;

  @ViewChild('productModal', { static: false }) productModal?: ModalDirective;
  productdetail: any;
  sortValue: any = 'Order Date';
  supportList: any;

  constructor(public store: Store, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.vehiculosRegistrados= vehiculosRegistrados;
    this.vehiculosRegistradosList= vehiculosRegistrados;
    this.vehiculosRegistrados = cloneDeep(this.vehiculosRegistradosList.slice(0,10));
    document.getElementById('elmLoader')?.classList.add('d-none')

    this.supportList = supportList;
    this.choferesList = choferesList;

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
