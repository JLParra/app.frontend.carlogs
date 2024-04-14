import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { choferesList } from './choferesList';
import { ChoferService } from '../services/chofer.service';
import { Chofer, getChoferes } from '../interfaces/chofer.model';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrl: './chofer.component.scss'
})
export class ChoferComponent implements OnInit {

  choferesList: Chofer[] = [];
  constructor(private _choferesService: ChoferService) {

  }

  ngOnInit(): void {

    this.getChofer();
  }

  getChofer() {
    this._choferesService.cargarChoferes().subscribe(resp => {
      // console.log(resp)
      this.choferesList = resp
    });
  }

}
