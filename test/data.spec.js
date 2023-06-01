import {allPokemons} from "./main.js";
import { filterDataByType, sortData } from '../src/data.js';


describe('filterDataByType', () => {
  it('is a function', () => {
    expect(typeof filterDataByType).toBe('function');
  });

  it('returns `charmeleon` for fire', () => {
    const pokemonesFire = filterDataByType(allPokemons, "fire");
    const pokemonFuego= pokemonesFire.length
    expect(pokemonFuego).toBe(22);
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
