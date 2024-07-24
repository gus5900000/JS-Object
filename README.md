# Projet de Simulation de Combat

Bienvenue dans ce projet de simulation de combat en JavaScript ! Ce projet est une application web simple conçue pour démontrer l'utilisation de la programmation orientée objet (POO) en JavaScript.

## Description du Projet

L'application permet de simuler un combat entre deux personnages dans une arène virtuelle. Chaque personnage possède des caractéristiques spécifiques telles que la force, la défense, les points de vie, et l'initiative. Le combat se déroule tour à tour, chaque personnage attaquant l'autre jusqu'à ce que l'un d'eux soit vaincu.

### Fonctionnalités

- **Création de Personnages :** Chaque personnage est créé avec un nom et un ensemble de paramètres déterminant sa force, sa défense, ses points de vie, et son initiative.
- **Système de Combat :** Le combat se déroule dans une arène où les personnages s'attaquent mutuellement jusqu'à ce que l'un d'eux tombe à zéro points de vie.
- **Affichage Dynamique :** Le déroulement du combat est affiché dynamiquement dans l'interface utilisateur, permettant de suivre chaque attaque et chaque coup reçu par les personnages.

### Utilisation

1. **Création des Personnages :** Les personnages sont créés avec leurs caractéristiques spécifiques. Par exemple, Brutos est un personnage avec une force élevée mais une faible défense, tandis que Xena a une faible force mais une initiative élevée.
2. **Initialisation du Combat :** Un combat est initié entre les deux personnages dans une zone spécifiée de l'application.
3. **Déroulement du Combat :** Le combat se déroule automatiquement, chaque personnage attaquant l'autre à tour de rôle jusqu'à ce qu'un vainqueur soit déterminé.

### Exemple de Code

Voici un aperçu du code pour créer et initier un combat entre deux personnages :

```javascript
import { Character } from "./script/Character.js";
import { Combat } from "./script/Combat.js";

let arena = document.querySelector('#app-zone');
let brutos = new Character('Brutos', {'strength': 'forte', 'defense': 'faible', 'hitPoint': 'moyenne', 'initiative': 'faible'});
let xena = new Character('Xena', {'strength': 'faible', 'defense': 'moyenne', 'hitPoint': 'moyenne', 'initiative': 'forte'});

let combat = new Combat(arena, brutos, xena);
combat.fight();
```
