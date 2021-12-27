require('Logger.js');

class Player {

    constructor(name) {
        this.name = name;
        this.life = 100;
        this.defense = null;
        this.attack = null;
        this.logger = new Logger();
    }

    incLife(val) {
        this.life += val;
        console.info(`[Increase Life] - The life `)
    }

    decLife(val) {
        this.life -= val;
        console.info();
    }

    incDefense(val) {
        this.defence += val;
    }

    decDefense(val) {
        this.defence -= val;
    }
    
    incAttack(val) {
        this.attack += val;
    }

    decAttack(val) {
        this.attack -= val;
    }
}