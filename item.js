const itemsNames = [
  'Weapon',
  'Trap',
  'Potion'
];

const abilities = [
'Health',
'Attack',
'Defence'
];

// const readline = require('readline');

export class Item {
    constructor() {
      // weapon||trap||potion
      this.itemname = itemsNames[Math.floor(Math.random()*itemsNames.length)]; 

      //?
      this.droprate = Math.floor(Math.random() * 10) + 1; ;

      // health||attack||defence
      this.ability =abilities[Math.floor(Math.random()*abilities.length)]; 

      // Trap:-20 to 0 Other:0 to 20
      if(this.itemname=='Trap')
      this.amount = Math.floor(Math.random() * 20)-20;
      else
      this.amount = Math.floor(Math.random() * 20); 
    }
   
    show() {
      if(this.itemname=='Weapon'||this.itemname=='Potion'){
        console.log( 'You found a ' + this.itemname);
        console.log( 'Ablity: ' + this.amount + ' to your ' + this.ability);
      }
      if(this.itemname=='Trap'){
        console.log( 'You have step on a ' + this.itemname);
        console.log( '[Trap] - ' + this.amount + 'damage');
      }
    }
  }
