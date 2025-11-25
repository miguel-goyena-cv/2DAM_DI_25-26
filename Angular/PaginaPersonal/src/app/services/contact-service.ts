import { Injectable } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//const URL_BASE: String = 'https://6790ccf7af8442fd7377c747.mockapi.io';
const URL_BASE: String = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnContacts: Observable<any> = this.updateSubject.asObservable();

  constructor(private http: HttpClient) { }

  anadirContacto(contacto: ContactModel) {
    this.http.post(URL_BASE + '/contacts', contacto)
      .subscribe(newContact => {
        alert('Contact Created:' + JSON.stringify(newContact));
        this.notifyUpdateContact(null);
      });
  }

  listarContactos(): Observable<ContactModel[]> {
    return this.http
      .get<ContactModel[]>(URL_BASE + '/contacts');
  }

  /*
  Notificamos del cambio en un contacto
  */
  notifyUpdateContact(data: any) {
    this.updateSubject.next(data)
  }


}
