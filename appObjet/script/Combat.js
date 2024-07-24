import { Character } from "./Character.js";
import { Hero } from "./Hero.js";

export class Combat {
    room;
    hero;
    character2; 

    /**
     *
     * @param {HTMLElement} room      
     * @param {Hero} hero 
     * @param {Character} character2 
     */

    constructor(room, hero, character2) {
        this.room = room;
        this.hero = hero;
        this.character2 = character2;
    }

    display() {
        this.room.innerHTML = '';
        this.room.style.display = 'flex';
        this.room.style.flexDirection = 'column';
        this.room.style.justifyContent = 'space-around';
        this.room.style.alignItems = 'center';
        this.room.style.padding = '2%';

        this.displayZone = document.createElement('div');
        this.displayZone.style.width = '90%';
        this.displayZone.style.backgroundColor = 'lightgrey';
        this.room.style.padding = '2%';

        this.interfaceZone = document.createElement('div');
        this.interfaceZone.style.display = 'flex';
        this.interfaceZone.style.justifyContent = 'center';
        this.interfaceZone.style.alignItems = 'center';
        this.interfaceZone.style.marginTop = '5%';
        this.interfaceZone.style.width = '90%';
        this.room.appendChild(this.interfaceZone);

        this.attackButton = document.createElement('button');
        this.attackButton.setAttribute('class', 'btn btn-danger');
        this.attackButton.setAttribute('disabled', 'true');
        this.attackButton.innerHTML = 'Attaquer';
        this.interfaceZone.appendChild(this.attackButton);
        
        this.attackButton.addEventListener('click', this.hero.attack);
        
        this.powerButton = [];
        this.powerButton.push(this.attackButton);
        for (let i = 0; i < this.hero.power.length; i++) {
            let powerButton = document.createElement('button');  
            this.powerButton.push(powerButton);
            powerButton.setAttribute('class', 'btn btn-danger');
            powerButton.setAttribute('disabled', 'true');
            powerButton.style.marginLeft = '5%'
            powerButton.innerHTML = this.hero.powerName[i];
            powerButton.addEventListener('click', this.hero.power[i])
            this.interfaceZone.appendChild(powerButton);
        }

 

        this.room.appendChild(this.displayZone);
        console.log(this)
    }

    heroTurn() {
        
    }

    IATurn() {
    }


    fight() {
        this.display();
        (this.hero.initiative > this.character2.initiative) ? fristPlayer = this.hero : fristPlayer = this.character2;

        let message = document.createElement('p');
        message.innerHTML = `${fristPlayer.name} commence le combat.`
        this.displayZone.appendChild(message);

        /**
        while (this.hero.hitPoint > 0 && this.character2.hitPoint > 0) {
            let message = document.createElement('p');
            message.innerHTML = this.character2.attack(this.hero);
            this.displayZone.appendChild(message);
            if (this.hero.hitPoint > 0) {
                let message = document.createElement('p');
                message.innerHTML = this.hero.attack(this.character2);
                this.displayZone.appendChild(message);
            }
        }
             */
    }
   
}