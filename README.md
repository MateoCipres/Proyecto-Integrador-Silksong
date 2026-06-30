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

## ⚡ Parte 3: Interactividad con JavaScript

En esta etapa agregué todas las funcionalidades interactivas de la página usando JavaScript puro, sin librerías externas. Los cambios más importantes que hice:


Tips rotativos — la sección de consejos tiene un botón que va rotando los tips de forma cíclica con cada click, mostrando uno a la vez en vez de listar todos juntos.
Filtro de trofeos — agregué 4 botones (Todos, Fácil, Medio, Difícil) sobre la tabla de trofeos que muestran u ocultan las filas según su tipo de dificultad, usando atributos data-tipo en cada fila y manipulación del DOM para mostrar/ocultar.
Validación del formulario — el formulario de logrado.html valida con JavaScript que el nombre, el correo (incluyendo que tenga un @) y el campo de experiencia no estén vacíos antes de permitir el envío. Los mensajes de error y éxito se muestran dinámicamente en el DOM. Se utilizó try/catch para controlar el flujo de validación.
Overlay descriptivo en imágenes — al apoyar el mouse sobre las imágenes y gifs de la página aparece un overlay semitransparente con una descripción breve de cada una. El efecto usa mouseenter/mouseout en JavaScript y transiciones de opacidad en CSS.
Scroll reveal — las secciones principales de la página aparecen con un fade-in suave a medida que el usuario va haciendo scroll, usando la API IntersectionObserver.
Toggle modo oscuro/claro — un botón fijo en la esquina superior derecha permite cambiar entre el tema oscuro original y un tema claro, alternando una clase en el <body> que sobreescribe las variables CSS.

## 📸 Capturas

![Border radius](IMAGENES/border%20radius%20y%20box%20shadow.png)

![Formulario](IMAGENES/formulario%20modificado%20y%20relacionado%20con%20colores.png)

![Links](IMAGENES/FUNCIONAMIENTO%20LINKS.png)

![Texto alrededor](IMAGENES/imagenes%20con%20texto%20a%20los%20costados.png)

![Tabla](IMAGENES/tabla%20con%20grid.png)

![Grid](IMAGENES/grid%20en%20columnas%20con%20texto%20e%20imagenes.png)


## ✍️ Autor
**Mateo Cipres** — Proyecto Integrador | Programación III — UTN 2026