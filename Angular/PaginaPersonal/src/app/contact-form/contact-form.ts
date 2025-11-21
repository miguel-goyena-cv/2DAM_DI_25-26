import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModel } from '../models/ContactModel';
import { ContactService } from '../services/contact-service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  constructor(private contactService: ContactService){};


  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    message: new FormControl('', Validators.required)
  });
  
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }


  sendMessage() {
    let contacto = new ContactModel(this.contactForm.value.email!, this.contactForm.value.message!);
    this.contactService.anadirContacto(contacto);
    
  }

}
