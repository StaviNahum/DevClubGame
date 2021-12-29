import emoji from 'node-emoji';

const itemsNames = [
  'Weapon',
  'Trap',
  'Potion'
];

const abilities = [
'Health',
'Attack',
'Defense'
];

const icons = {
  'Weapon': emoji.get("gun"),
  'Trap': emoji.get("hand"),
  'Potion': emoji.get("tropical_drink")
}

export class Item {
    constructor() {
      // weapon||trap||potion
      this.name = itemsNames[Math.floor(Math.random()*itemsNames.length)]; 

      //?
      this.droprate = Math.floor(Math.random() * 10) + 1; ;

      // health||attack||defence
      this.ability = abilities[Math.floor(Math.random()*abilities.length)]; 

      this.icon = icons[this.name];

      // Trap:-20 to 0 Other:0 to 20
      if(this.name == 'Trap')
        this.amount = Math.floor(Math.random() * 20)-20;
      else
        this.amount = Math.floor(Math.random() * 20); 
    }
   
    show() {
      if(this.name == 'Weapon'||this.name == 'Potion'){
        console.info( '[Alert] - You found a ' + this.name);
        console.log( 'Ablity: ' + this.amount + ' to your ' + this.ability);
      }
      if(this.name=='Trap'){
        console.info( '[Alert] - You have step on a ' + this.name);
        console.log( '[Trap] - ' + this.amount + ' damage');
      }
    }

    getName() {
      return this.name;
    }

    getIcon() {
      return this.icon;
    }
  }
