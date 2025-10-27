import { Component, signal, SimpleChanges } from '@angular/core';
import { FotoPersonal } from "../foto-personal/foto-personal";
import { FotoPerfilModel } from '../models/FotoPersonalModel';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Copyright } from "../copyright/copyright";

@Component({
  selector: 'app-profile',
  imports: [FotoPersonal, UpperCasePipe, Copyright],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  title = 'Miguel Goyena';
  esOculto = signal(false);
  titleBoton = signal('Ocultar');
  imagenClickeada = "";
  photoTitle = "Yo Contento";
  photoSrc = "https://static.vecteezy.com/system/resources/previews/047/408/042/non_2x/a-boy-happy-mode-emoji-style-happy-kids-avatars-cute-children-smiling-boy-girl-in-rounds-set-illustration-girl-and-boy-avatar-happy-kids-child-happiness-boy-happy-face-illustration-art-vector.jpg";
  photos: FotoPerfilModel[] = [];


  ngOnInit() {
    let fotoContento = new FotoPerfilModel("Estoy Contento",
      "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-173524.jpg?semt=ais_hybrid&w=740&q=80", "");

    let fotoTriste = new FotoPerfilModel("Estoy Triste",
      "https://static.vecteezy.com/system/resources/previews/053/232/166/non_2x/sad-boy-cartoon-avatar-illustration-free-vector.jpg"
      , "");

    this.photos = [fotoContento, fotoTriste];
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
