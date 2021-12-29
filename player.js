export class Player {

    constructor() {
        this.name = null;
        this.health = 100;
        this.defense = null;
        this.attack = null;
        this.icon = null;
    }

    attack(player) {
        let damage = this.attack - player.defense;
        if(damage < 0)
            damage = 0;
        player.sethealth(damage);
        console.info (`[Attack] - ${this.name} attacked ${player.name}: ${damage} damage!`);
        console.log (`${this.name} currect health: ${this.health} HP`);
        console.log ('----------------------------------------------------------');
    }

    sethealth(damage) {
        this.health -= damage;
    }

    getHealth() {
        return this.health;
    }

    setName(name) {
        this.name = name;
    }

    getDefense() {
        return this.defense;
    }

    getAttack() {
        return this.attack;
    }

    getIcon(){
        return this.icon;
    }

    attack(player) {
        player.beenAttacked(this);
    }

    dead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}