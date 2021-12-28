import {Player} from './player.js';
import {Item} from './item.js';
 
export class User extends Player{
    constructor(name, defense, attack) {
        super();
        this.name = name;
        this.defense = defense;
        this.attack = attack;
        this.position = {'x': 0, 'y': 0};
    }

    grab(grabbedItem) {
            switch(grabbedItem.ability) {
                case 'health':
                    {
                        this.health += grabbedItem.amount;
                        break;
                    }
                case 'attack':
                    {
                        this.attack += grabbedItem.amount;
                        break;
                    }
                case 'defense':
                    {
                        this.defense += grabbedItem.amount;
                        break;
                    }
                default :
                    {
                        break;
                    }
            }
    }

    getPosition() {
        return this.position;
    }

    up() {
        this.position.y--;        
    }

    down() {
        this.position.y--;        
    }

    right() {
        this.position.x++;
    }

    left() {
        this.position.x--;
    }

    won(position) {

    }
}