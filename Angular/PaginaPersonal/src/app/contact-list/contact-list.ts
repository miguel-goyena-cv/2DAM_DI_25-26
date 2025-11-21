import { Component, input } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { ContactService } from '../services/contact-service';
import { Observable, Subscription } from 'rxjs';
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
  private subscriptionUpdate: Subscription | null = null;

  ngOnInit() {
    // Hago la llamada a la API para obtener la lista de Perfiles
    this.contactosAsync$ = this.contactService.listarContactos();

    // We subscribe to changes in Contacts
    this.subscriptionUpdate =
      this.contactService.changesOnContacts.subscribe(
        () => {
          this.contactosAsync$ = this.contactService.listarContactos();
        }
      );

  }

}
