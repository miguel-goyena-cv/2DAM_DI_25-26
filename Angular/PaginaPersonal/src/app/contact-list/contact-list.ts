import { Component, input } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { ContactService } from '../services/contact-service';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {

  constructor(private contactService: ContactService) { };

  contactos: ContactModel[] = [];

  ngOnInit() {
    this.contactos = this.contactService.listarContactos();
  }

}
