abstract class Boton {

    constructor(public id: string, public label: string, public data: any) {}

    public pintarHtml(): void {
        let boton = document.createElement('button') as HTMLButtonElement;
        boton.id = this.id;
        boton.innerText = this.label;
        boton.onclick = this.hacerAccion.bind(this);
        document.body.appendChild(boton);
    }

    abstract hacerAccion(): void;
}

export class BotonSaludar extends Boton{

    constructor(id: string, label: string, data: any) {
        super(id, label, data);
    }

    public hacerAccion(): void {
        let elemento : string = this.data;
        alert("Hola: "+elemento);
    }

}