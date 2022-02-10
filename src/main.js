import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


console.log(example, data);

let menuToggle = document.querySelector('.menu-toggle');
let menu = document.getElementById('menu');
let menuPersonajes = document.querySelector('#menu-personajes');
let sectionPaginaprincipal = document.querySelector('.pagina-principal');
let sectionpersonajes = document.querySelector('.personajes');


menuToggle.addEventListener('click', ()=>{
    menu.classList.toggle('show');
});

const mostrarPersonajesPorpelicula = () => {
    data.films.forEach(pelicula => {
  let divPelicula = document.createElement("div");
  divPelicula.classList = "peliculas-con-personajes";
  let tituloPelicula = document.createElement("h2");
  tituloPelicula.innerText = pelicula.title;
  divPelicula.appendChild(tituloPelicula);
  const divPersonajes = crearPersonajes(pelicula);
  divPelicula.appendChild(divPersonajes);
  sectionpersonajes.appendChild(divPelicula);
  let hr = document.createElement("hr");
  sectionpersonajes.appendChild(hr);
    });
}

const crearPersonajes = (pelicula) => {
 let divPersonajes = document.createElement("div");
 divPersonajes.classList = "personajes";
 pelicula.people.forEach( personaje => {
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
}
menuPersonajes.addEventListener('click', () =>{
    sectionPaginaprincipal.style.display = "none";
    mostrarPersonajesPorpelicula();
});