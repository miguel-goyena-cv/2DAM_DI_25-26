import { Injectable } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL_BASE: String = 'https://6790ccf7af8442fd7377c747.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  anadirContacto(contacto: ContactModel) {
    this.http.post(URL_BASE+'/contacts', contacto)
    .subscribe(newContact => {
        alert('Contact Created:'+ JSON.stringify(newContact));
    });
  }
  
  listarContactos(): Observable<ContactModel[]> {
    return this.http
      .get<ContactModel[]>(URL_BASE+'/contacts');
  }

}
