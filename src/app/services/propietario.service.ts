import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  API_URL = 'https://sistemacatastralcholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  savePropietario(ficha: Propietario) {
    return this.http.post(`${this.API_URL}/Propietario`, ficha);
  }
}