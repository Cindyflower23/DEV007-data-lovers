import data from "../src/data/pokemon/pokemon.js"
import { filterDataByType, sortData } from '../src/data.js';


describe('filterDataByType', () => {
  it('is a function', () => {
    expect(typeof filterDataByType).toBe('function');
  });

  it('returns `22 pokemones para pokemonFuego`', () => {
    const pokemonesFire = filterDataByType(data.pokemon, "fire");
    const pokemonFuego= pokemonesFire.length
    expect(pokemonFuego).toBe(22);
  });

  it('returns `50 pokemones para pokemonWater`', () => {
    const pokemonesWater = filterDataByType(data.pokemon, "water");
    const pokemonWater= pokemonesWater.length
    expect(pokemonWater).toBe(50);
  });

  it('returns `24 pokemones para pokemonGrass`', () => {
    const pokemonesGrass = filterDataByType(data.pokemon, "grass");
    const pokemonGrass= pokemonesGrass.length
    expect(pokemonGrass).toBe(24);
  });

  it('returns `17 pokemones para pokemonElectric`', () => {
    const pokemonesElectric = filterDataByType(data.pokemon, "electric");
    const pokemonElectric= pokemonesElectric.length
    expect(pokemonElectric).toBe(17);
  });

  it('returns `10 pokemones para pokemonIce`', () => {
    const pokemonesIce = filterDataByType(data.pokemon, "ice");
    const pokemonIce= pokemonesIce.length
    expect(pokemonIce).toBe(10);
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData ).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('OMG');
  });
});
