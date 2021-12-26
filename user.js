require('player.js');
 
class User extends Player{
    constructor(name, defense, attack) {
        super(name);
        this.defense = defense;
        this.attack = attack;
    }
}