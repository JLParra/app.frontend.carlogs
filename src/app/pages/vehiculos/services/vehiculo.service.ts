import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  map } from 'rxjs';


import { environment } from 'src/environments/environment';
import { ActualizarVehiculo, Vehiculo } from '../interfaces/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  API = environment.API

  constructor(private http: HttpClient, private router: Router) { }
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: new HttpHeaders({ 'x-token': this.token })
    }
  }

  cargarVehiculos() {
    const url = `${this.API}/vehiculos`
    return this.http.get<Vehiculo>(url, this.headers)
      .pipe(
        map((resp: Vehiculo) => resp.vehiculos)
      );
  }

  crearVehiculo(formData: any) {
    return this.http.post(`${this.API}/vehiculos`, formData, this.headers);
  }
  getVehiculoById(id:string) {
    const url = `${this.API}/vehiculos/${id}`
    return this.http.get<Vehiculo>(url, this.headers)
      .pipe(
        map((resp: Vehiculo) => resp.vehiculos)
      );
  }
  actualizarVehiculo(object: ActualizarVehiculo) {
    console.log("update:",object)
    return this.http.put(`${this.API}/vehiculos/${object._id}`, object, this.headers);
  }

}
