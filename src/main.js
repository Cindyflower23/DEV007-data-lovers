import data from "./data/pokemon/pokemon.js";
import { filterDataByType, sortData } from "./data.js";

//console.log(data);
const allPokemons = data.pokemon;
const contenedor = document.getElementById("targets");
allPokemons.forEach((pokemon) => {
  const tarjetas = document.createElement("div");
  tarjetas.classList.add("tarjetaPokemon");
  tarjetas.innerHTML += `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    
    `;
  contenedor.appendChild(tarjetas);
});

const pokemonesNormal = filterDataByType(allPokemons, "normal");
const btnNormal = document.getElementById("normal");

const pokemonesFire = filterDataByType(allPokemons, "fire");
const btnFire = document.getElementById("fire");

const pokemonesWater = filterDataByType(allPokemons, "water");
const btnWater = document.getElementById("water");

const pokemonesGrass = filterDataByType(allPokemons, "grass");
const btnGrass = document.getElementById("grass");

const pokemonesElectric = filterDataByType(allPokemons, "electric");
const btnElectric = document.getElementById("electric");

const pokemonesIce = filterDataByType(allPokemons, "ice");
const btnIce = document.getElementById("ice");

const pokemonesFighting = filterDataByType(allPokemons, "fighting");
const btnFighting = document.getElementById("fighting");

const pokemonesPoison = filterDataByType(allPokemons, "poison");
const btnPoison = document.getElementById("poison");

const pokemonesGround = filterDataByType(allPokemons, "ground");
const btnGround = document.getElementById("ground");

const pokemonesFlying = filterDataByType(allPokemons, "flying");
const btnFlying = document.getElementById("flying");

const pokemonesPsychic = filterDataByType(allPokemons, "psychic");
const btnPsychic = document.getElementById("psychic");

const pokemonesBug = filterDataByType(allPokemons, "bug");
const btnBug = document.getElementById("bug");

const pokemonesRock = filterDataByType(allPokemons, "rock");
const btnRock = document.getElementById("rock");

const pokemonesGhost = filterDataByType(allPokemons, "ghost");
const btnGhost = document.getElementById("ghost");

const pokemonesDark = filterDataByType(allPokemons, "dark");
const btnDark = document.getElementById("dark");

const pokemonesDragon = filterDataByType(allPokemons, "dragon");
const btnDragon = document.getElementById("dragon");

const pokemonesSteel = filterDataByType(allPokemons, "steel");
const btnSteel = document.getElementById("steel");

const pokemonesFairy = filterDataByType(allPokemons, "fairy");
const btnFairy = document.getElementById("fairy");

btnNormal.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesNormal.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnFire.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";
  console.log(pokemonesFire);
  pokemonesFire.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnWater.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";
  console.log(pokemonesWater);
  pokemonesWater.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnGrass.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";
  console.log(pokemonesGrass);
  pokemonesGrass.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnElectric.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";
  console.log(pokemonesElectric);
  pokemonesElectric.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnIce.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";
  console.log(pokemonesIce);
  pokemonesIce.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnFighting.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesFighting.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
});

btnPoison.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  mostrarPokemon(pokemonesPoison);
});
function mostrarPokemon(pokefiltrados) {
  contenedor.innerHTML = "";
  pokefiltrados.forEach((pokemon) => {
    console.log(pokemon);
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `;
    contenedor.appendChild(tarjetas);
  });
}

btnGround.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesGround.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnFlying.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesFlying.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnFlying.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesFlying.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnPsychic.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesPsychic.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnBug.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesBug.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnRock.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesRock.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                          
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnGhost.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesGhost.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnDark.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesDark.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnDark.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesDark.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnDragon.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesDragon.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnSteel.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesSteel.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

btnFairy.addEventListener("click", function (e) {
  e.preventDefault();
  // e.stopPropagation();
  contenedor.innerHTML = "";

  pokemonesFairy.forEach((pokemon) => {
    console.log(pokemon);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);
  });
});

//Obtener el elemento Select del usuario
const selectElement = document.getElementById("in1");
//Escuchar el evento change del select
selectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  //console.log(selectedOption);
  const sortPokemons = sortData(allPokemons, selectedOption);
  console.log(sortPokemons)
  
  //    ordenarAsc(selectedOption);
  contenedor.innerHTML = "";
  sortPokemons.forEach((pokemon) => {
    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjetaPokemon");
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `;
    contenedor.appendChild(tarjetas);

    
  });
  
});

