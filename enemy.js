import {Player} from './player.js';

const names = [
    'Orc',
    'Goblin',
    'Dragon '
    ];

export class Enemy extends Player{
    constructor() {
        super();
        this.name = names[Math.floor(Math.random()*names.length)];
        this.defense = Math.floor(Math.random() * 10) + 1;
        this.attack = Math.floor(Math.random() * 10) + 1;
    }
    show() {
        console.log( 'You get into a fight with ' + this.name);
        console.log( 'Health: ' + this.health );
        console.log( 'Attack: ' + this.attack );
        console.log( 'Defense: ' + this.defense);
      }
}