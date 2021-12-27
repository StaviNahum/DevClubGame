class Item {
    constructor() {
      // weapon||trap||potion
      this._itemname = null ; 
      //?
      this._droprate = Math.floor(Math.random() * 10) + 1; ;
      // health||attack||defence
      this._ability = null; 
      // -20 to 20
      this._amount = Math.floor(Math.random() * 40) - 20; 
    }
    show() {
      return 'I have a ' + this.itemname;
    }
  }

  function genertor() {
    let items;
   for (let i=0;i<10;i++){
     items[i]= new Item();
   }
   console.log(items) ;
  }
  genertor()