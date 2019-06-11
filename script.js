let puntJug = 0;
let puntComp = 0;
let puntUsuario_span = document.getElementById("punt-usuario");
let puntComp_span = document.getElementById("punt-comp");
let puntuacion_div = document.querySelector(".puntuacion");
let resultado_div = document.querySelector(".resultado p");
let piedra_div = document.getElementById("pie");
let papel_div = document.getElementById("pap");
let tijera_div = document.getElementById("tij");

let pequenoJugador = "jugador".fontsize(3).sub();
let pequenoComp = "comp".fontsize(3).sub();

// Declaracion de variables

function getEleccionComp() {
    let eleccionComp = ["pie", "pap", "tij"]
    let numAleat = (Math.floor((Math.random() * 3)));
    return eleccionComp[numAleat];
}

function convertirPalabra(palabra) {
    if (palabra === "pie") return "piedra";
    if (palabra === "pap") return "papel";
    if (palabra === "tij") return "tijera";
}

function gana(eleccionJugador, eleccionComp) {
    let eleccionJugador_div = document.getElementById(eleccionJugador);

    puntJug++;
    puntUsuario_span.innerHTML = puntJug;
    puntComp_span.innerHTML = puntComp;
    resultado_div.innerHTML = `${convertirPalabra(eleccionJugador)}${pequenoJugador} gana contra ${convertirPalabra(eleccionComp)}${pequenoComp}. GANASTE!`;

    eleccionJugador_div.classList.add("brillo-verde");
    //retorna un arreglo de clades del elemento especificado
    //en este caso se añade a la lista de clases la creada

    setTimeout(() => {
        eleccionJugador_div.classList.remove("brillo-verde")
    }, 400);
}

function pierde(eleccionJugador, eleccionComp) {
    let eleccionJugador_div = document.getElementById(eleccionJugador);

    puntComp++
    puntComp_span.innerHTML = puntComp;
    puntUsuario_span.innerHTML = puntJug;
    resultado_div.innerHTML = `${convertirPalabra(eleccionJugador)}${pequenoJugador} pierde contra ${convertirPalabra(eleccionComp)}${pequenoComp}. PERDISTE!`;

    eleccionJugador_div.classList.add("brillo-rojo");
    //retorna un arreglo de clades del elemento especificado
    //en este caso se añade a la lista de clases la creada

    setTimeout(() => {
        eleccionJugador_div.classList.remove("brillo-rojo")
    }, 400);
}

function empata(eleccionJugador, eleccionComp) {
    let eleccionJugador_div = document.getElementById(eleccionJugador);

    puntComp_span.innerHTML = puntComp;
    puntUsuario_span.innerHTML = puntJug;
    resultado_div.innerHTML = `${convertirPalabra(eleccionJugador)}${pequenoJugador} es lo mismo que ${convertirPalabra(eleccionComp)}${pequenoComp}. EMPATE!`;

    eleccionJugador_div.classList.add("brillo-gris");
    //retorna un arreglo de clades del elemento especificado
    //en este caso se añade a la lista de clases la creada

    setTimeout(() => {
        eleccionJugador_div.classList.remove("brillo-gris")
    }, 400);
}

function juego(eleccionJugador) {

    let eleccionComp = getEleccionComp();


    //retorna un arreglo de clades del elemento especificado
    //en este caso se añade a la lista de clases la creada
    switch (eleccionJugador + eleccionComp) {
        case "pietij":
        case "pappie":
        case "tijpap":

            gana(eleccionJugador, eleccionComp);
            break;
        case "piepap":
        case "paptij":
        case "tijpie":
            pierde(eleccionJugador, eleccionComp);

            break;
        case "piepie":
        case "pappap":
        case "tijtij":
            empata(eleccionJugador, eleccionComp);

            break;
    }
}


function main() {
    //codigo ECS6 en donde se utilizan las funciones flecha, y desaparece la palabra function
    piedra_div.addEventListener("click", () => {juego("pie"); })

    papel_div.addEventListener("click", () => {juego("pap"); })

    tijera_div.addEventListener("click", () => {juego("tij"); })
}

main();
