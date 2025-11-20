import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoPerfilModel } from '../models/FotoPersonalModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  getFotoPerfil(): Observable<FotoPerfilModel[]> {
    return this.http.get<FotoPerfilModel[]>('https://6790ccf7af8442fd7377c747.mockapi.io/profiles');
  }

}
