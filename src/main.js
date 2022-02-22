import { filterData } from "./data.js";
import data from "./data/ghibli/ghibli.js";

let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");
let menuTitulos = document.querySelector("#titulos");
let menuPersonajes = document.querySelector("#menu-personajes");
let sectionPaginaprincipal = document.querySelector(".pagina-principal");
let seccionpersonajes = document.querySelector(".seccionpersonajes");
let films = document.querySelector(".films");
let logo = document.querySelector("#btn-inicio");

const mostrarTitulos = () => {
  sectionPaginaprincipal.style.display = "none";
  seccionpersonajes.style.display = "none";
  films.style.display = "block";
};

logo.addEventListener("click", () => {
  seccionpersonajes.style.display = "none";
  films.style.display = "none";
  sectionPaginaprincipal.style.display = "block";
});

let buttonFilms = document.getElementById("filmoButton");
buttonFilms.addEventListener("click", mostrarTitulos);
menuTitulos.addEventListener("click", mostrarTitulos);

menuToggle.addEventListener("click", (f) => {
  menu.classList.toggle("show");
});

menuPersonajes.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "none";
  films.style.display = "none";
  seccionpersonajes.style.display = "block";

  mostrarPersonajesPorpelicula(data.films);
});

let volverTitulos = document.createElement("button");
volverTitulos.classList = "return1";
volverTitulos.innerText = "Volver";
films.appendChild(volverTitulos);
volverTitulos.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "block";
  films.style.display = "none";
});

const mostrarPersonajesPorpelicula = (peliculas) => {
  let divContenedorPeliculasConPersonajes = document.querySelector(
    "#contenedor-peliculas-con-personajes"
  );
  divContenedorPeliculasConPersonajes.innerHTML = "";
  peliculas.forEach((pelicula) => {
    let divPelicula = document.createElement("div");
    divPelicula.classList = "peliculas-con-personajes";
    let tituloPelicula = document.createElement("h2");
    tituloPelicula.innerText = pelicula.title;
    divPelicula.appendChild(tituloPelicula);
    const divPersonajes = crearPersonajes(pelicula);
    divPelicula.appendChild(divPersonajes);
    divContenedorPeliculasConPersonajes.appendChild(divPelicula);
    return mostrarPersonajesPorpelicula;
  });
};

const crearPersonajes = (pelicula) => {
  let divPersonajes = document.createElement("div");
  divPersonajes.classList = "personajes";
  pelicula.people.forEach((personaje) => {
    let divPersonaje = document.createElement("div");
    divPersonaje.classList = "personaje";
    const tituloPersonaje = crearTituloPersonaje(personaje);
    const descripcion = crearDescripcionPersonaje(personaje);
    divPersonaje.appendChild(tituloPersonaje);
    divPersonaje.appendChild(descripcion);
    divPersonajes.appendChild(divPersonaje);
  });

  return divPersonajes;
};

const crearTituloPersonaje = (personaje) => {
  let tituloPersonaje = document.createElement("div");
  tituloPersonaje.classList = "titulo-personaje";
  let imagenPersonaje = document.createElement("img");
  imagenPersonaje.src = personaje.img;
  imagenPersonaje.classList = "posterPersonaje";
  let nombrePersonaje = document.createElement("h3");
  nombrePersonaje.innerText = personaje.name;

  tituloPersonaje.appendChild(nombrePersonaje);
  tituloPersonaje.appendChild(imagenPersonaje);

  return tituloPersonaje;
};

const crearDescripcionPersonaje = (personaje) => {
  let descripcionPersonaje = document.createElement("div");
  descripcionPersonaje.classList = "descripcion-personaje";
  let especie = document.createElement("span");
  especie.innerText = "Specie: " + personaje.specie;
  let age = document.createElement("span");
  age.innerText = "Age: " + personaje.age;
  let eye_color = document.createElement("span");
  eye_color.innerText = "Eye color: " + personaje.eye_color;
  let hair_color = document.createElement("span");
  hair_color.innerText = "Hair color: " + personaje.hair_color;
  let gender = document.createElement("span");
  gender.innerText = "Gender: " + personaje.gender;

  descripcionPersonaje.appendChild(especie);
  descripcionPersonaje.appendChild(age);
  descripcionPersonaje.appendChild(eye_color);
  descripcionPersonaje.appendChild(hair_color);
  descripcionPersonaje.appendChild(gender);

  return descripcionPersonaje;
};

let busqueda = document.querySelector("#busqueda");
const eventoFiltrarPeliculas = (e) => {
  let buscar = e.target.value;
  const peliculasFiltradas = filterData(data.films, (pelicula) =>
    pelicula.title.toLowerCase().includes(buscar.toLowerCase())
  );

  mostrarPersonajesPorpelicula(peliculasFiltradas);
};

busqueda.addEventListener("change", eventoFiltrarPeliculas);
