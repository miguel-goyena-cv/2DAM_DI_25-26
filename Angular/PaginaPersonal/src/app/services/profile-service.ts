import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoPerfilModel } from '../models/FotoPersonalModel';
import { Observable } from 'rxjs';

//const URL_BASE: String = 'https://6790ccf7af8442fd7377c747.mockapi.io';
const URL_BASE: String = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  getFotoPerfil(): Observable<FotoPerfilModel[]> {
    return this.http.get<FotoPerfilModel[]>(URL_BASE+'/profiles');
  }

}
