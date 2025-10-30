import { Component, signal } from '@angular/core';

import { Copyright } from "./copyright/copyright";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Copyright, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
