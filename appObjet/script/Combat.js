import { Character } from "./Character.js";

export class Combat {
    room;
    character1;
    character2;

    /**
     *
     * @param {HTMLElement} room      
     * @param {Character} character1 
     * @param {Character} character2 
     */

    constructor(room, character1, character2) {
        this.room = room;
        if (character1.initiative > character2.initiative) {
            this.character1 = character2;
            this.character2 = character1;
        } else {
            this.character1 = character1;
            this.character2 = character2;
        }
    }

    display() {
        this.room.innerHTML = ''
        this.room.style.display = 'flex';
        this.room.style.flexDirection = 'column';
        this.room.style.justifyContent = 'space-around';
        this.room.style.alignItems = 'center';
        this.room.style.padding = '2%';

        this.displayZone = document.createElement('div');
        this.displayZone.style.width = '90%';
        this.displayZone.style.backgroundColor = 'lightgrey';
        this.room.style.padding = '2%';

        this.room.appendChild(this.displayZone);
        console.log(this.displayZone);
    }

    fight() {
        this.display();
        let message = document.createElement('p');
        message.innerHTML = `${this.character1.name} commence le combat.`
        this.displayZone.appendChild(message);
        while (this.character1.hitPoint > 0 && this.character2.hitPoint > 0) {
            let message = document.createElement('p');
            message.innerHTML = this.character2.attack(this.character1);
            this.displayZone.appendChild(message);
            if (this.character1.hitPoint > 0) {
                let message = document.createElement('p');
                message.innerHTML = this.character1.attack(this.character2);
                this.displayZone.appendChild(message);
            }
        }
    }
}