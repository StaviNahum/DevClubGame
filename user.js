import {Player} from './player.js';
import {Item} from './item.js';
import emoji from 'node-emoji';
 
export class User extends Player{
    constructor(name, defense, attack) {
        super();
        this.name = name;
        this.defense = defense;
        this.attack = attack;
        this.position = {'x': 0, 'y': 0};
        this.icon = emoji.get("woman");
    }

    grab(grabbedItem) {
        switch(grabbedItem.ability) {
            case 'Health':
                {
                    this.health += grabbedItem.amount;
                    break;
                }
            case 'Attack':
                {
                    this.attack += grabbedItem.amount;
                    break;
                }
            case 'Defense':
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
        this.position.y++;        
    }

    right() {
        this.position.x++;
    }

    left() {
        this.position.x--;
    }
}