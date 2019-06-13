import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosDesarrollo } from '../models/datos-desarrollo';

@Injectable({
  providedIn: 'root'
})
export class DatosDesarrolloService {
  
  API_URL = 'https://sistemacatastralcholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDatosDesarrollo() {
    return this.http.get(`${this.API_URL}/DatosDesarrollo`);
  }

  saveDatosDesarrollo(datosDesarrollo: DatosDesarrollo) {
    return this.http.post(`${this.API_URL}/DatosDesarrollo`, datosDesarrollo);
  }

  getDatoDesarrollo(id: number) {
    return this.http.get(`${this.API_URL}/DatosDesarrollo/${id}`)
  }

  modifyDatosDesarrollo(datosDesarrollo: DatosDesarrollo) {
    return this.http.put(`${this.API_URL}/DatosDesarrollo/${datosDesarrollo.iddatosdesarrollo}`, datosDesarrollo);
  }

  deleteDatosDesarrollo(id: number) {
    return this.http.delete(`${this.API_URL}/DatosDesarrollo/${id}`);
  }
}
