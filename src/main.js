import {  } from './data.js';
import data from './data/ghibli/ghibli.js';

let menuToggle = document.querySelector('.menu-toggle');
let menu = document.getElementById('menu');
let menuTitulos = document.querySelector('#titulos');
let sectionPaginaprincipal = document.querySelector('.pagina-principal');

let buttonFilms = document.getElementById('filmoButton');
buttonFilms.addEventListener('click', () => {
    sectionPaginaprincipal.style.display = 'none';
    films.style.display = 'block';

})

let films = document.querySelector('.films');
films.style.display = 'none';

menuToggle.addEventListener('click', f=>{
    menu.classList.toggle('show');
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


const filmSection = data.films.map(movies =>{
    let divMovies = document.createElement('div');
    divMovies.classList = 'movies-list';
    let movieTitle = document.createElement('h2');
    movieTitle.classList = 'movie_title';
    let filme = movies.title;
    movieTitle.innerText = filme;
    let poster = document.createElement('img');
    poster.classList = 'posters';
    let image = movies.poster;
    poster.src = image;
    let dateRelease = document.createElement('h3');
    dateRelease.classList = 'date';
    let date = movies.release_date;
    dateRelease.innerHTML = date;
    divMovies.appendChild(movieTitle);
    divMovies.appendChild(poster);
    divMovies.appendChild(dateRelease);
    films.appendChild(divMovies)

    return {filme,image,date};
}
    ) 
    
const filtrar = filmSection.filter(p =>
p.date > 1995 && p.date < 2000
 );

console.log(filtrar)

let volverTitulos = document.createElement('button');
volverTitulos.classList ='return1';
volverTitulos.innerText = 'Volver';
films.appendChild(volverTitulos);
volverTitulos.addEventListener('click', () => {
sectionPaginaprincipal.style.display = 'block';
films.style.display = 'none';
 }
 )

menuTitulos.addEventListener('click', ()=> {
    sectionPaginaprincipal.style.display = 'none';
    films.style.display = 'block';
    
});

