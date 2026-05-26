# 🏆 Guía para conseguir el Platino de Hollow Knight: Silksong

## 📄 Descripción
Guía completa para conseguir todos los trofeos de **Hollow Knight: Silksong** y obtener el platino en PS5. 
Incluye estimaciones de dificultad, tiempo promedio, lista de trofeos y consejos prácticos redactados 
desde la experiencia del jugador.

## 📋 Contenido
- ¿Qué es Silksong? — introducción al juego y sus mecánicas principales
- Dificultad aproximada — estimación de **8/10** basada en la experiencia de cada jugador
- Horas promedio — estimación de **~100hs** para completar el platino
- Tabla de los **34 trofeos** necesarios, clasificados por calidad (Bronce, Plata, Oro) y tipo (Fácil, Medio, Difícil)
- Consejos prácticos — tips de gameplay, coleccionables y speedrun
- Sección para que otros jugadores compartan su experiencia

## 🗂️ Archivos
- `index.html` — página principal de la guía
- `logrado.html` — formulario para enviar tu experiencia platinando el juego
- `style.css` — estilos de toda la página
- `IMAGENES` 

## 🎨 Parte 2: Modificación con CSS

En esta etapa mejoré el diseño de la página para que no quede como un documento de texto pelado. Los cambios más importantes que hice:

- **Paleta de colores** — fondo negro oscuro (`#1B1B1B`), títulos en rojo (`#E03C31`), texto blanco hueso y links en dorado (`#FFC107`). Todo definido con variables CSS en `:root` para poder cambiarlo fácil si hace falta.
- **Tipografía** — importé dos fuentes de Google Fonts: *Lora* para el cuerpo del texto y *Archivo Black* para los títulos.
- **Layout con Flexbox y Grid** — usé Flexbox para el menú de navegación y el footer, y CSS Grid para organizar las secciones de consejos, formulario y "acerca de mí" en tres columnas. También apliqué Grid al formulario de `logrado.html`.
- **Animaciones** — el título principal y la imagen de portada tienen una animación de entrada con `@keyframes` que hace un fade-in suave al cargar la página.
- **Imágenes flotantes** — los gifs de las secciones de dificultad y horas usan `float` para que el texto se acomode alrededor.
- **Tabla de trofeos** — bordes dorados, padding en celdas y las tres imágenes de trofeos con `border-radius` y `box-shadow` personalizado por color (bronce, plata, oro).
- **Hover y transiciones** — los links crecen levemente con `scale` al pasar el mouse, el botón de enviar sube con `translateY`, todo con `transition` suave.
- **Diseño responsive** — dos media queries (`768px` y `480px`) que reorganizan el menú en columna y apilan las secciones verticalmente en pantallas chicas.

## 📸 Capturas

![img](imagenes/border%20radius%20y%20box%20shadow.png)
(imagenes/formulario%20modificado%20y%20relacionado%20con%20colores.png)
(imagenes/FUNCIONAMIENTO%20LINKS.png)
(imagenes/imagenes%20con%20texto%20a%20los%20costados.png)
(imagenes/tabla%20con%20grid.png)
(imagenes/grid%20en%20columnas%20con%20texto%20e%20imagenes.png)


## ✍️ Autor
**Mateo Cipres** — Proyecto Integrador | Programación III — UTN 2026