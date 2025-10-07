import * as Calculadora from "./calculadora.js";
let operando1: number;
let operando2: number;

document.getElementById("sumar")?.addEventListener("click", () => {
  eventoSuma();
});

document.getElementById("restar")?.addEventListener("click", () => {
  eventoResta();
});

function eventoSuma(): void {

    let operandosOk = recuperarOperandos();

    if (operandosOk){
        let resultado: number = Calculadora.sumar(operando1, operando2);
        document.getElementById("resultado")!.textContent = `Resultado: ${resultado}`;
    }
    else{
        document.getElementById("resultado")!.textContent = "";
    }

}

function eventoResta(): void {

    let operandosOk = recuperarOperandos();

    if (operandosOk){
        let resultado: number = Calculadora.restar(operando1, operando2);
        document.getElementById("resultado")!.textContent = `Resultado: ${resultado}`;
    }
    else{
        document.getElementById("resultado")!.textContent = "";
    }
}

function recuperarOperandos(): boolean {
    operando1 = Number((document.getElementById("operando1") as HTMLInputElement).value);
    operando2 = Number((document.getElementById("operando2") as HTMLInputElement).value);

    if (isNaN(operando1)) {
        alert("El operando 1 no es un número");
        return false;
    }
    
    if (isNaN(operando2)) {
        alert("El operando 2 no es un número");
        return false;
    }

    return true;
}

