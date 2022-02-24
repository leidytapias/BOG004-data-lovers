import { filtrar } from '../src/data.js';
import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import data from "../src/data/ghibli/ghibli.js";

const pelicula = data.films;


describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('retorne Only yesterday en 1991', () => {
    const result = filtrar(pelicula);
    expect(filtrar(result.title, 1988)).toBe('My Neighbor Totoro');
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
