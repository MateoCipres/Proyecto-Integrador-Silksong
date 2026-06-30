/*
   Array con tips rápidos para el platino.
   Se usa en mostrarTipActual() para ir mostrando uno por vez.

const tipsRapidos = [
    "Completá los deseos prometidos apenas aparecen, no los dejes para el final.",
    "Usá herramientas azules contra jefes con ataques de fuego.",
    "Mantené el mapa actualizado para los trofeos de coleccionables.",
    "Dejá los speedruns para una segunda partida, ya conociendo el juego."
];

/* Índice del tip que se está mostrando actualmente */
let indiceTipActual = 0;

function mostrarTipActual() {
    const parrafoTip = document.getElementById("tip-actual");

    if (!parrafoTip) {
        return;
    }

    parrafoTip.textContent = tipsRapidos[indiceTipActual];
}



function avanzarTip() {
    indiceTipActual++;

    if (indiceTipActual >= tipsRapidos.length) {
        indiceTipActual = 0;
    }

    mostrarTipActual();
}

function filtrarTrofeos(tipo) {
    const tabla = document.getElementById("tabla-trofeos");

    if (!tabla) {
        return;
    }

    const filas = tabla.querySelectorAll("tr[data-tipo]");

    filas.forEach(function(fila) {
        if (tipo === "todos" || fila.dataset.tipo === tipo) {
            fila.classList.remove("oculto");
        } else {
            fila.classList.add("oculto");
        }
    });
}

function inicializarFiltros() {
    const botones = document.querySelectorAll(".btn-filtro");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            botones.forEach(function(b) {
                b.classList.remove("activo");
            });
            boton.classList.add("activo");

            const tipoElegido = boton.dataset.filtro;
            filtrarTrofeos(tipoElegido);
        });
    });
}

/* ----------------------------------------------------------
   validarFormulario(nombre, correo)
   Responsabilidad: verificar que nombre y correo no estén vacíos.
   Si algún campo obligatorio falta, lanza un error con un
   mensaje descriptivo (en vez de devolver true/false), para
   poder capturarlo con try/catch en quien la invoque.
---------------------------------------------------------- */
function validarFormulario(nombre, correo, experiencia) {
    if (nombre === "") {
        throw new Error("Por favor, ingresá tu nombre de usuario.");
    }

    if (correo === "") {
        throw new Error("Por favor, ingresá tu correo.");
    }

    if (!correo.includes("@")) {
        throw new Error("El correo ingresado no es válido, debe contener un @.");
    }

    if (experiencia === "") {
        throw new Error("Por favor, contanos tu experiencia platinando el juego.");
    }

    return true;
}

/* ----------------------------------------------------------
   mostrarError(mensaje)
   Responsabilidad: escribir el mensaje de error en el DOM
   y asegurarse de que el mensaje de éxito esté oculto.
---------------------------------------------------------- */
function mostrarError(mensaje) {
    const parrafoError = document.getElementById("mensaje-error");
    const parrafoExito = document.getElementById("mensaje-exito");

    parrafoError.textContent = "⚠️ " + mensaje;
    parrafoError.classList.remove("oculto");
    parrafoExito.classList.add("oculto");
}


/* ----------------------------------------------------------
   mostrarExito()
   Responsabilidad: ocultar el mensaje de error y mostrar
   el mensaje de éxito cuando la validación pasó correctamente.
---------------------------------------------------------- */
function mostrarExito() {
    const parrafoError = document.getElementById("mensaje-error");
    const parrafoExito = document.getElementById("mensaje-exito");

    parrafoError.classList.add("oculto");
    parrafoExito.classList.remove("oculto");
}


/* ----------------------------------------------------------
   inicializarFormulario()
   Responsabilidad: enganchar el evento submit del formulario,
   evitar el envío real, leer los valores de nombre y correo,
   y usar try/catch para validar y reaccionar según corresponda.
---------------------------------------------------------- */
function inicializarFormulario() {
    const formulario = document.getElementById("form-experiencia");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const experiencia = document.getElementById("experiencia").value.trim();

        try {
            validarFormulario(nombre, correo, experiencia);
            mostrarExito();
            formulario.reset();
        } catch (error) {
            mostrarError(error.message);
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    mostrarTipActual();

    const botonSiguienteTip = document.getElementById("btn-siguiente-tip");
    if (botonSiguienteTip) {
        botonSiguienteTip.addEventListener("click", avanzarTip);
    }

    inicializarFiltros();
    inicializarFormulario();
});