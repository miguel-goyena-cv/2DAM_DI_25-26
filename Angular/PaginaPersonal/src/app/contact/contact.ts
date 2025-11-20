import { Component } from '@angular/core';
import { ContactForm } from "../contact-form/contact-form";
import { ContactList } from "../contact-list/contact-list";
import { ContactModel } from '../models/ContactModel';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, ContactList],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
