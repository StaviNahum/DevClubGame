export class Player {

    constructor() {
        this.name = null;
        this.health = 100;
        this.defense = null;
        this.attack = null;
    }

    beenAttacked(player) {
        let damage = player.attack - this.defense;
        if(damage < 0)
            damage = 0;
        this.health -= damage;
        console.info (`[Attack] - ${player.name} has been attacked by ${player.name}: ${damage} damage!`);
        console.log (`${this.name} currect health: ${this.health} HP`);
        console.log ('----------------------------------------------------------');
    }

    getHealth() {
        return this.health;
    }

    getDefense() {
        return this.defense;
    }

    getAttack() {
        return this.attack;
    }

    dead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}