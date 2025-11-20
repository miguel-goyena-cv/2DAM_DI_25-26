import { Component, signal, SimpleChanges } from '@angular/core';
import { FotoPersonal } from "../foto-personal/foto-personal";
import { FotoPerfilModel } from '../models/FotoPersonalModel';
import { UpperCasePipe, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile-service';

@Component({
  selector: 'app-profile',
  imports: [FotoPersonal, UpperCasePipe, AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  title = 'Miguel Goyena';
  esOculto = signal(false);
  titleBoton = signal('Ocultar');
  imagenClickeada = "";

  photosAsync$!: Observable<FotoPerfilModel[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    // Hago la llamada a la API para obtener la lista de Perfiles
    this.photosAsync$ = this.profileService.getFotoPerfil();

  }

  toggleName() {
    this.esOculto.set(!this.esOculto());
    if (this.titleBoton() == 'Ocultar') {
      this.titleBoton.set('Mostrar');
    }
    else {
      this.titleBoton.set('Ocultar');
    }
  }

  ensenarClick(event: string) {
    this.imagenClickeada = event;
  }

}
