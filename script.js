/* ==========================================================
   Proyecto Integrador - Hollow Knight Silksong Platino
   Parte 3: Interactividad y Programación con JavaScript
   Autor: Mateo Cipres
   ========================================================== */

console.log("script.js cargado correctamente");

/* ==========================================================
   Proyecto Integrador - Hollow Knight Silksong Platino
   Parte 3: Interactividad y Programación con JavaScript
   Autor: Mateo Cipres
   ========================================================== */

console.log("script.js cargado correctamente");


/* ----------------------------------------------------------
   Array con tips rápidos para el platino.
   Se usa en mostrarTipActual() para ir mostrando uno por vez.
---------------------------------------------------------- */
const tipsRapidos = [
    "Completá los deseos prometidos apenas aparecen, no los dejes para el final.",
    "Usá herramientas azules contra jefes con ataques de fuego.",
    "Mantené el mapa actualizado para los trofeos de coleccionables.",
    "Dejá los speedruns para una segunda partida, ya conociendo el juego."
];

/* Índice del tip que se está mostrando actualmente */
let indiceTipActual = 0;


/* ----------------------------------------------------------
   mostrarTipActual()
   Responsabilidad: tomar el tip correspondiente a indiceTipActual
   y escribirlo dentro de <p id="tip-actual">.
   Solo corre en index.html, por eso verificamos que el elemento exista.
---------------------------------------------------------- */
function mostrarTipActual() {
    const parrafoTip = document.getElementById("tip-actual");

    if (!parrafoTip) {
        return;
    }

    parrafoTip.textContent = tipsRapidos[indiceTipActual];
}


/* ----------------------------------------------------------
   avanzarTip()
   Responsabilidad: incrementar el índice del tip actual y,
   si se pasa del último, volver al primero (comportamiento cíclico).
   Luego invoca a mostrarTipActual() para reflejar el cambio en el DOM.
---------------------------------------------------------- */
function avanzarTip() {
    indiceTipActual++;

    if (indiceTipActual >= tipsRapidos.length) {
        indiceTipActual = 0;
    }

    mostrarTipActual();
}


/* ----------------------------------------------------------
   Punto de entrada: ejecutamos las funciones de inicialización
   una vez que el HTML terminó de cargar.
---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    mostrarTipActual();

    const botonSiguienteTip = document.getElementById("btn-siguiente-tip");
    if (botonSiguienteTip) {
        botonSiguienteTip.addEventListener("click", avanzarTip);
    }
});