import { Character } from "./script/Character.js";
import { Combat } from "./script/Combat.js";
import { Hero } from "./script/Hero.js";
import { heroTypes } from "./script/heroTypes.js";

let arena = document.querySelector('#app-zone');
let brutos = new Character('Brutos', {'strength': 'forte', 'defense': 'faible', 'hitPoint': 'moyenne', 'initiative': 'faible'});
let xena = new Hero('Xena', heroTypes['voleur']);

let combat = new Combat(arena, xena, brutos);
console.log(xena);


//let combat = new Combat(arena, brutos, xena);
//
combat.display();
//