import { Component, input } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { ContactService } from '../services/contact-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [AsyncPipe],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {

  constructor(private contactService: ContactService) { };

  contactosAsync$!: Observable<ContactModel[]>;

  ngOnInit() {
    // Hago la llamada a la API para obtener la lista de Perfiles
    this.contactosAsync$ = this.contactService.listarContactos();
  }

}
