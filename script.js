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

function mostrarError(mensaje) {
    const parrafoError = document.getElementById("mensaje-error");
    const parrafoExito = document.getElementById("mensaje-exito");

    parrafoError.textContent = "⚠️ " + mensaje;
    parrafoError.classList.remove("oculto");
    parrafoExito.classList.add("oculto");
}

function mostrarExito() {
    const parrafoError = document.getElementById("mensaje-error");
    const parrafoExito = document.getElementById("mensaje-exito");

    parrafoError.classList.add("oculto");
    parrafoExito.classList.remove("oculto");
}

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

const descripcionesImagenes = [
    { id: "imagen-principal", texto: "Hornet, la protagonista de Silksong, lista para la aventura." },
    { id: "gif-escape", texto: "Escapando de una zona peligrosa del mapa." },
    { id: "gif-seda", texto: "Hornet recargando seda." },
    { id: "gif-sherma", texto: "Sherma, una aliada carismática." },
    { id: "bronce", texto: "BRONCE" },
    { id: "plata", texto: "PLATA" },
    { id: "oro", texto: "ORO" }
];


function inicializarHoverImagenes() {
    descripcionesImagenes.forEach(function(item) {
        const imagen = document.getElementById(item.id);

        if (!imagen) {
            return;
        }

        const contenedor = imagen.parentElement;

        const parrafoDescripcion = document.createElement("p");
        parrafoDescripcion.textContent = item.texto;
        parrafoDescripcion.classList.add("descripcion-imagen");

        let vecesVisto = 0;

        imagen.addEventListener("mouseenter", function() {
            vecesVisto++;
            console.log(item.texto + " — vista " + vecesVisto + " veces");
        });

        contenedor.appendChild(parrafoDescripcion);
    });
}

function inicializarScrollReveal() {
    const secciones = document.querySelectorAll(".scroll-reveal");

    if (secciones.length === 0) {
        return;
    }

    const observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    secciones.forEach(function(seccion) {
        observador.observe(seccion);
    });
}

function inicializarToggleTema() {
    const botonTema = document.getElementById("btn-tema");

    if (!botonTema) {
        return;
    }

    botonTema.addEventListener("click", function() {
        document.body.classList.toggle("modo-claro");

        if (document.body.classList.contains("modo-claro")) {
            botonTema.textContent = "🌙 Modo oscuro";
        } else {
            botonTema.textContent = "☀️ Modo claro";
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
    inicializarHoverImagenes();
    inicializarScrollReveal();
    inicializarToggleTema();
});