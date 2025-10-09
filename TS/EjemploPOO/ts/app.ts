import { BotonSaludar } from "./botones.js";
import { TextBox } from "./textbox.js";

let textbox = new TextBox('misaludo', 'Dime un saludo');
textbox.pintarHtml();

let boton = new BotonSaludar('miboton', 'Saludar', textbox.getHtmlELement().value);
boton.pintarHtml();


