class Player {

    constructor(name) {
        this.name = name;
        this.life = 100;
        this.defense = 100;
        this.attack = 100;
    }

    incLife(val) {
        this.life += val;
    }

    decLife(val) {
        this.life -= val;
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