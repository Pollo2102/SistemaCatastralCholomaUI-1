import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosComplementarios } from '../models/datos-complementarios';

@Injectable({
  providedIn: 'root'
})
export class DatosComplementariosService {

  API_URL = 'https://sistemacatastralcholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDatosComplementarios() {
    return this.http.get(`${this.API_URL}/DatosComplementarios`);
  }

  saveDatosComplementarios(datosComplementarios: DatosComplementarios) {
    return this.http.post(`${this.API_URL}/DatosComplementarios`, datosComplementarios);
  }

  getDatoComplementario(id: number) {
    return this.http.get(`${this.API_URL}/DatosComplementarios/${id}`)
  }

  modifyDatosComplementarios(datosComplementarios: DatosComplementarios) {
    return this.http.put(`${this.API_URL}/DatosComplementarios/${datosComplementarios.idClaveCatastral}`, datosComplementarios);
  }

  deleteDatosComplementarios(id: number) {
    return this.http.delete(`${this.API_URL}/DatosComplementarios/${id}`);
  }
}
