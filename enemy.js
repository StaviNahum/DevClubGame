require('player.js');
 
class Enemy extends Player{
    constructor(name) {
        super(name);
        this.defense = Math.floor(Math.random() * 101);
        this.attack = Math.floor(Math.random() * 101);
    }
}