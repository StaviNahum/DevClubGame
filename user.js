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

    grab(item) {
        switch(item.ability) {
            case 'health':
                {
                    this.health += item.amount;
                    break;
                }
            case 'attack':
                {
                    this.attack += item.amount;
                    break;
                }
            case 'defense':
                {
                    this.defense += item.amount;
                    break;
                }
            default :
                {
                    break;
                }
        }
        grabbedItem.show();
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