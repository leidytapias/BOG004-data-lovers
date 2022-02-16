import {} from "./data.js";
import data from "./data/ghibli/ghibli.js";

let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");
let menuTitulos = document.querySelector("#titulos");
let menuPersonajes = document.querySelector("#menu-personajes");
let sectionPaginaprincipal = document.querySelector(".pagina-principal");
let seccionpersonajes = document.querySelector(".seccionpersonajes");
let films = document.querySelector(".films");

const mostrarTitulos = () => {
  sectionPaginaprincipal.style.display = "none";
  seccionpersonajes.style.display = "none";
  films.style.display = "block";
};

let buttonFilms = document.getElementById("filmoButton");
buttonFilms.addEventListener("click", mostrarTitulos);
menuTitulos.addEventListener("click", mostrarTitulos);

menuToggle.addEventListener("click", (f) => {
  menu.classList.toggle("show");
});

menuPersonajes.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "none";
  films.style.display = "none";
  seccionpersonajes.style.display = "grid";
  const input = document.querySelector("input");
  const busqueda = document.getElementById("busqueda");
  input.addEventListener("change", updateValue);
  // const arregloFiltrado = data.films.filter(
    // (pelicula) => pelicula.release_date == "1986"
  // );
  mostrarPersonajesPorpelicula(data.films);
});

/*const filmSection = () => {
    data.films.map(movies =>{
    let divMovies = document.createElement('div');
    divMovies.classList = 'movies-list';
    let movieTitle = document.createElement('h2');
    movieTitle.innerText = movies.title;
    let poster = document.createElement('img');
    poster.src = movies.poster;
    let dateRelease = document.createElement('h3');
    dateRelease.innerHTML = movies.release_date;
    let sectionMark = document.createElement('hr');
    divMovies.appendChild(movieTitle);
    divMovies.appendChild(poster);
    divMovies.appendChild(dateRelease);
    films.appendChild(divMovies)
    films.appendChild(sectionMark);
}
    ) 
    return divMovies;
}
console.log(filmSection());*/

const filmSection = data.films.map((movies) => {
  let divMovies = document.createElement("div");
  divMovies.classList = "movies-list";
  let movieTitle = document.createElement("h2");
  movieTitle.classList = "movie_title";
  let filme = movies.title;
  movieTitle.innerText = filme;
  let poster = document.createElement("img");
  poster.classList = "posters";
  let image = movies.poster;
  poster.src = image;
  let dateRelease = document.createElement("h3");
  dateRelease.classList = "date";
  let date = movies.release_date;
  dateRelease.innerHTML = date;
  divMovies.appendChild(movieTitle);
  divMovies.appendChild(poster);
  divMovies.appendChild(dateRelease);
  films.appendChild(divMovies);

  return { filme, image, date };
});

const filtrar = filmSection.filter((p) => p.date > 1995 && p.date < 2000);

console.log(filtrar);

let volverTitulos = document.createElement("button");
volverTitulos.classList = "return1";
volverTitulos.innerText = "Volver";
films.appendChild(volverTitulos);
volverTitulos.addEventListener("click", () => {
  sectionPaginaprincipal.style.display = "block";
  films.style.display = "none";
});

const mostrarPersonajesPorpelicula = (peliculas) => {
  peliculas.forEach((pelicula) => {
    let divPelicula = document.createElement("div");
    divPelicula.classList = "peliculas-con-personajes";
    let tituloPelicula = document.createElement("h2");
    tituloPelicula.innerText = pelicula.title;
    divPelicula.appendChild(tituloPelicula);
    const divPersonajes = crearPersonajes(pelicula);
    divPelicula.appendChild(divPersonajes);
    seccionpersonajes.appendChild(divPelicula);
    let hr = document.createElement("hr");
    seccionpersonajes.appendChild(hr);
  });
};

const crearPersonajes = (pelicula) => {
  let divPersonajes = document.createElement("div");
  divPersonajes.classList = "personajes";
  pelicula.people.forEach((personaje) => {
    let divPersonaje = document.createElement("div");
    divPersonaje.classList = "personaje";
    let nombrePersonaje = document.createElement("h3");
    nombrePersonaje.innerText = personaje.name;
    let imagenPersonaje = document.createElement("img");
    imagenPersonaje.src = personaje.img;
    let especie = document.createElement("span");
    especie.innerText = personaje.specie;

    divPersonaje.appendChild(imagenPersonaje);
    divPersonaje.appendChild(nombrePersonaje);
    divPersonaje.appendChild(especie);
    divPersonajes.appendChild(divPersonaje);
  });
  return divPersonajes;
};

function updateValue(e) {
  textContent = e.target.value;
}
