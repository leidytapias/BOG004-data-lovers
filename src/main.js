import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let menuToggle = document.querySelector('.menu-toggle');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', f=>{
    menu.classList.toggle('show');
});