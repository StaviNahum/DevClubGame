export class Player {

    constructor() {
        this.name = null;
        this.health = 100;
        this.defense = null;
        this.attack = null;
        // this.logger = new Logger();
    }

    beenAttacked(player) {
        let damage= player.attack - this.defense;
        if(damage<0)
        damage=0;
        this.health -= damage;
        console.log (player.name + ' Attack:' + damage + ' damage!');
        console.log (this.name+'Currect Health:' +this.health+'HP');
        console.log ('~~~~~~~~~~~~~~~~~~~')
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