export class Player {

    constructor() {
        this.name = null;
        this.health = 100;
        this.defense = null;
        this.attack = null;
        this.icon = null;
    }

    hit(player) {
        console.log(`${this.name} - attack: ${this.attack}  defense: ${this.defense}`)
        console.log(`${player.name} - attack: ${player.attack}  defense: ${player.defense}`)
        let damage = this.attack - player.defense;

        // Can reach to infinity loop cause the 0 demage.
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

    dead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}