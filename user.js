import {Player} from './player.js';
import {Item} from './item.js';
 
export class User extends Player{
    constructor(name, defense, attack) {
        super();
        this.name = name;
        this.defense = defense;
        this.attack = attack;
    }

    grab(grabbedItem) {
        // let item = new Item();
        // item = grabbedItem;
        switch(grabbedItem.ability) {
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
}