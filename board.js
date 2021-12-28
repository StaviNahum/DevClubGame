import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

export class Board {
    constructor(enemies, items, user) {
      //this.height = Math.floor(Math.random() * 1000) + 100;
      //this.width = Math.floor(Math.random()*1000) + 100;
      this.generateMapFlag = 'flag';
      this.enemies = enemies;
      this.items = items;
      this.user = user;
      this.height = 10;
      this.width = 10;
      this.board= new Array(this.height).fill(null).map(() => new Array(this.width).fill(null));
      this.generate();
    }

    generate() {
      let x;
      let y;
      // Generate enemies array
      for (let i = 0; i < this.enemies.length; i++){
        do {
          x = Math.floor(Math.random() * (this.height - 2)) + 1;
          y = Math.floor(Math.random() * (this.width - 2)) + 1;
          }
        // console.log(typeof(this.board[x][y]));
        while (this.board[x][y] !== null){
          x = Math.floor(Math.random() * (this.height));
          y = Math.floor(Math.random() * (this.width));
        }
        this.board[x][y] = this.enemies[i];
      }

      //Generate items array
      for (let i = 0; i < this.items.length; i++){
        do {
          let x = Math.floor(Math.random() * (this.height - 2)) + 1;
          let y = Math.floor(Math.random() * (this.width - 2)) + 1;
          }
        while (this.board[x][y] !== null){
          x = Math.floor(Math.random() * (this.height));
          y = Math.floor(Math.random() * (this.width));
        }
        this.board[x][y] = this.items[i];
      }
    }

    printBoard() {
      let line = "";
      this.board[0][0]=this.user;
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

    // generateItems(items){
    //   let x = Math.floor(Math.random() * (this.height));
    //   let y = Math.floor(Math.random() * (this.width));
    //   for (let i = 0; i < this.items.length; i++){
    //     while ((this.board[x][y] !== null) &&
    //       ((x !== 0)&& (y !== 0)) &&
    //        ((x !== this.height - 1) && (y !== this.width - 1))){
    //       x = Math.floor(Math.random() * (this.height));
    //       y = Math.floor(Math.random() * (this.width));
    //     }
    //     this.board[x][y] = this.items[i];
    //   }
    // }
    generateMap() {
      if (!this.generateMap) {
        this.board[0][0] = this.user;
        this.board = this.generateEnemys;
        this.board = this.generateItems;
        this.generateMapFlag = 1;
      } else {
        console.log("Board has already been generated.");
      }
    }
  
  }
  