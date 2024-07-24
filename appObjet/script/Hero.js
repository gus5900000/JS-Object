import { Character } from "./Character.js";

export class Hero extends Character {
    type
    power = [];
    powerName = [];

    constructor(name, parameter) {
        super(name, parameter);
        this.power = parameter['power'];
        this.type = parameter['type'];
        this.powerName = parameter['powerName']
        switch (parameter['type']) {
            case 'voleur':
                this.defenseMax = this.defense;
                break;
            default:
                break;
        };
    }
}

