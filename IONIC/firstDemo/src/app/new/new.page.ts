import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  items = Array.from({ length: 50 }, (_, i) => i);

  constructor() {
  }

  ngOnInit() {
  }

  scrollToBottom() {
    this.content.scrollToBottom(300);
  }

}
