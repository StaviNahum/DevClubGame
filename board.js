import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

export class Board {
    constructor(enemies, items, user) {
      //this.height = Math.floor(Math.random() * 1000) + 100;
      //this.width = Math.floor(Math.random()*1000) + 100;
      this.generateMapFlag = 0;
      this.enemies = this.enemies;
      this.items = items;
      this.user = user;
      this.height = 10;
      this.width = 10;
      this.board = [this.height][this.width];
    }

    generateItem(itemType){
      for (let i = 0; i < this.arr.length; i++){
        do {
          let x = Math.floor(Math.random() * (this.height - 2)) + 1;
          let y = Math.floor(Math.random() * (this.width - 2)) + 1;
        }
        while (this.board[x][y] !== null) {
          y = Math.floor(Math.random() * (this.height));
          y = Math.floor(Math.random() * (this.width));
        }
        switch (itemType) {
          case 'enemy':
            {
              this.board[x][y] = this.enemies[i];
              break;
            }
          case 'item':
            {
              this.board[x][y] = this.items[i];
              break;
            }
          default:
            {
              console.log(`Couldn't generate ${itemType} array!`);
            }        
        }
      }
    }

    printBoard() {
      let line = "";
      for (let i = 0; i < this.height; i++){
          for (let j = 0; j < this.width; j++){
              if (this.board[i][j] !== this.user){
                line += "|_|";
              }
              else{
                line += "|P|";
              }
          }
          console.log(line);
          line = "";
      }
    }

    // generateItems(){
    //   let indexX = Math.floor(Math.random() * (this.height));
    //   let indexY = Math.floor(Math.random() * (this.width));
    //   for (let i = 0; i < this.itemArr.length; i++){
    //     while ((this.board[indexX][indexY] !== null) &&
    //       ((indexX !== 0)&& (indexY !== 0)) &&
    //        ((indexX !== this.height - 1) && (indexY !== this.width - 1))){
    //       indexX = Math.floor(Math.random() * (this.height));
    //       indexY = Math.floor(Math.random() * (this.width));
    //     }
    //     this.board[indexX][indexY] = this.itemArr[i];
    //   }
    // }
    generateMap() {
      if (!this.generateMap) {
        this.board[0][0] = this.user;
        this.board = this.generateEnemys;
        this.board = this.generateItems;
        this.generateMapFlag = 1;
      } 
      else {
        console.log("Board has already been generated.");
    }
  }  
}
  