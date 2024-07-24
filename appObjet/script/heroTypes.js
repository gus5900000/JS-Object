export let heroTypes = {
    'voleur': {
        'strength': 'faible',
        'defense': 'forte',
        'hitPoint': 'faible',
        'initiative': 'forte',
        'type': 'voleur',
        'powerName': ['Attaque sournoise', 'Posture défensive'],
        'power': [(hero, adversary) => {
            let attack1 = hero.attack(adversary);
            let attack2 = hero.attack(adversary);
            hero.defense -= 2;
            return attack1 + ' & ' + attack2;
        }, (hero)=> {
            heroTypes.defense = hero.defenseMax;
        }]
    }
}