function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
let nombre = "Miguel Goyena";
document.getElementById("container").innerHTML = holaMundo(nombre);