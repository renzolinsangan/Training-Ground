// var generateName = require('sillyname'); // for common js
import generateName from "sillyname"; // for esm (generateRandomName)
import {randomSuperhero} from 'superheroes'; // for esm (superheroes)

function sillyName() {
    const sillyName = generateName();

    console.log(`My Name is ${sillyName}.`);
}

function superHeroes() {
    const superHeroes = randomSuperhero();

    console.log(`I am your Mighty Superhero ${superHeroes}.`);
}

sillyName();
superHeroes();