var itemsNames = [
  'Weapon',
  'Trap',
  'Potion'
];

var abilities = [
'Health',
'Attack',
'Defence'
];

export class Item {
    constructor() {

      // weapon||trap||potion
      this.itemname = itemsNames[Math.floor(Math.random()*itemsNames.length)]; 

      //?
      this.droprate = Math.floor(Math.random() * 10) + 1; ;

      // health||attack||defence
      this.ability =abilities[Math.floor(Math.random()*abilities.length)]; 

      // -20 to 20
      this.amount = Math.floor(Math.random() * 40) - 20; 
      
    }
   
    show() {
      console.log( 'You have got a ' + this.itemname);
      console.log( 'and you gain ' + this.amount + ' to your ' + this.ability);
    }
  }
