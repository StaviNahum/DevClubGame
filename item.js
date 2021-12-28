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
      console.log( 'You have got a ' + this._itemname);
      console.log( 'and you gain ' + this._amount + ' to your ' + this._ability);
    }
  }


  // function genertor() {
  //   let items;
  //  for (let i=0;i<10;i++){
  //    items[i]= new Item();
  //  }
  //  console.log(items) ;
  // }
  // genertor()

  let newItem= new Item();
newItem.show();
