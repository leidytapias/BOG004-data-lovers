import {filtrar, organizar, filterData } from "./data.js";
import data from "./data/ghibli/ghibli.js";

let studioGhibli = data.films;
let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");
let menuTitulos = document.querySelector("#titulos");
let menuPersonajes = document.querySelector("#menu-personajes");
let sectionPaginaprincipal = document.querySelector(".pagina-principal");
let seccionpersonajes = document.querySelector(".seccionpersonajes");
let films = document.querySelector(".films");
let logo = document.querySelector("#btn-inicio");
let divMovies = document.createElement("div");
divMovies.classList = "movies-list";

logo.addEventListener("click", () => {
  seccionpersonajes.style.display = "none";
  films.style.display = "none";
  sectionPaginaprincipal.style.display = "block";
});

menuToggle.addEventListener("click", (f) => {
  menu.classList.toggle("show");
});

const mostrarTitulos = () => {
  while (divMovies.firstChild) {
    divMovies.removeChild(divMovies.firstChild);
  }
  extraerPeliculas(studioGhibli);

  sectionPaginaprincipal.style.display = "none";
  seccionpersonajes.style.display = "none";
  films.style.display = "block";
};

let buttonFilms = document.getElementById("filmoButton");
buttonFilms.addEventListener("click", mostrarTitulos);
menuTitulos.addEventListener("click", mostrarTitulos);

let characterButton = document.getElementById("characterButton");
characterButton.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "none";
  films.style.display = "none";
  seccionpersonajes.style.display = "grid";
  mostrarPersonajesPorpelicula(data.films);
});

function extraerPeliculas(dataMovies) {
  dataMovies.map((movies) => {
    let movieTitle = document.createElement("h2");
    movieTitle.classList = "movie_title";
    let filme = movies.title;
    movieTitle.innerText = filme;
    let dateRelease = document.createElement("h3");
    dateRelease.classList = "date";
    let date = movies.release_date;
    dateRelease.innerHTML = date;
    let divInfo = document.createElement("div");
    divInfo.classList = "div_info";
    let poster = document.createElement("img");
    poster.classList = "posters";
    let image = movies.poster;
    poster.src = image;
    let descriptions = document.createElement("p");
    descriptions.classList = "descriptionFilms";
    let description = movies.description;
    descriptions.innerText = description;
    divMovies.appendChild(poster);
    divMovies.appendChild(divInfo);
    divInfo.appendChild(movieTitle);
    divInfo.appendChild(dateRelease);
    divInfo.appendChild(descriptions);
    films.appendChild(divMovies);
  });
}

let buttonAZ = document.getElementById("buttonAZ");
buttonAZ.addEventListener("click", orderAZ);

function orderAZ() {
  let peliculasOrganizadasZA = organizar(studioGhibli);
  let peliculasOrganizadasAZ = peliculasOrganizadasZA.reverse();
  while (divMovies.firstChild) {
    divMovies.removeChild(divMovies.firstChild);
  }
  extraerPeliculas(peliculasOrganizadasAZ);
}

let buttonZA = document.getElementById("buttonZA");
buttonZA.addEventListener("click", orderZA);

function orderZA() {
  let peliculasOrganizadas = organizar(studioGhibli);
  while (divMovies.firstChild) {
    divMovies.removeChild(divMovies.firstChild);
  }
  extraerPeliculas(peliculasOrganizadas);
}

let datelist = document.getElementById("years");
datelist.addEventListener("change", showDateFilterMovies);

function showDateFilterMovies() {
  let selected = datelist.options[datelist.selectedIndex].value;
  let filterMovies = filtrar(studioGhibli, selected);
  while (divMovies.firstChild) {
    divMovies.removeChild(divMovies.firstChild);
  }
  extraerPeliculas(filterMovies);
}

menuPersonajes.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "none";
  films.style.display = "none";
  seccionpersonajes.style.display = "block";

  mostrarPersonajesPorpelicula(data.films);
});

const mostrarPersonajesPorpelicula = (peliculas) => {
  let divContenedorPeliculasConPersonajes = document.querySelector(
    ".contenedor-peliculas-con-personajes"
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

  tituloPersonaje.appendChild(imagenPersonaje);

  return tituloPersonaje;
};

const crearDescripcionPersonaje = (personaje) => {
  let nombrePersonaje = document.createElement("h3");
  nombrePersonaje.innerText = personaje.name;
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

  descripcionPersonaje.appendChild(nombrePersonaje);
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
