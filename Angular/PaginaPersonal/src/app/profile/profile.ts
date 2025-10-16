import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  title = 'Miguel Goyena';
  esOculto = signal(false);
  titleBoton = signal('Ocultar');

  toggleName() {
    this.esOculto.set(!this.esOculto());
    if (this.titleBoton() == 'Ocultar') {
      this.titleBoton.set('Mostrar');
    }
    else {
      this.titleBoton.set('Ocultar');
    }
  }
  
}
