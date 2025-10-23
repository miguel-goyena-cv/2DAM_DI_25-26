import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-foto-personal',
  imports: [],
  templateUrl: './foto-personal.html',
  styleUrl: './foto-personal.scss'
})
export class FotoPersonal {

  title = input("Title");
  srcImage = input("default.jpg");

  clickFoto = output<string>();


  clickImagen() {
    this.clickFoto.emit("Pinchado en: "+this.title());
  }

}
