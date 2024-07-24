import { Character } from "./script/Character.js";
import { Combat } from "./script/Combat.js";

let arena = document.querySelector('#app-zone');
let brutos = new Character('Brutos', {'strength': 'forte', 'defense': 'faible', 'hitPoint': 'moyenne', 'initiative': 'faible'});
let xena = new Character('Xena',{'strength': 'faible', 'defense': 'moyenne', 'hitPoint': 'moyenne', 'initiative': 'forte'});

let combat = new Combat(arena, brutos, xena);

combat.fight();
