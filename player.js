export class Player {

    constructor() {
        this.name = null;
        this.health = 100;
        this.defense = null;
        this.attack = null;
        // this.logger = new Logger();
    }

    beenAttacked(attack) {
        const newHealth = this.health
        this.health -= attack - this.defense;
    }

    dead() {
        if (this.health <= 0) {
            return true;
        }
        return false;
    }

    // inchealth(val) {
    //     this.health += val;
    //     console.info(`[Increase health] - The health `)
    // }

    // dechealth(val) {
    //     this.health -= val;
    //     console.info();
    // }

    // incDefense(val) {
    //     this.defence += val;
    // }

    // decDefense(val) {
    //     this.defence -= val;
    // }
    
    // incAttack(val) {
    //     this.attack += val;
    // }

    // decAttack(val) {
    //     this.attack -= val;
    // }
}