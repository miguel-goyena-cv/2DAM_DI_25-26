import { Component, input } from '@angular/core';
import { ContactModel } from '../models/ContactModel';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {

  contactos = input<ContactModel[]>();

  //get contactosArray contactos.

}
