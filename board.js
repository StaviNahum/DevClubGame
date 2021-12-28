import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

export class Board {
    constructor(enemyArr, itemArr, player) {
      //this.height = Math.floor(Math.random() * 1000) + 100;
      //this.width = Math.floor(Math.random()*1000) + 100;
      this.generateMapFlag = 'flag';
      this.enemyArr = enemyArr;
      this.itemArr = itemArr;
      this.player = player;
      this.height = 10;
      this.width = 10;
      this.board= new Array(this.height).fill(0).map(() => new Array(this.width).fill(0));
    }
    printBoard() {
      let line = "";
      this.board[0][0]=this.player;
      for (let i = 0; i < this.height; i++){
          for (let j = 0; j < this.width; j++){
              if (this.board[i][j] !== this.player){
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
    generateEnemys(enemyArr){
      let indexX = Math.floor(Math.random() * (this.height));
      let indexY = Math.floor(Math.random() * (this.width));
      for (let i = 0; i < this.enemyArr.length; i++){
        while ((this.board[indexX][indexY] !== null) &&
          ((indexX !== 0)&& (indexY !== 0)) &&
           ((indexX !== this.height - 1) && (indexY !== this.width - 1))){
          indexX = Math.floor(Math.random() * (this.height));
          indexY = Math.floor(Math.random() * (this.width));
        }
        this.board[indexX][indexY] = this.enemyArr[i];
      }
    }
    generateItems(itemArr){
      let indexX = Math.floor(Math.random() * (this.height));
      let indexY = Math.floor(Math.random() * (this.width));
      for (let i = 0; i < this.itemArr.length; i++){
        while ((this.board[indexX][indexY] !== null) &&
          ((indexX !== 0)&& (indexY !== 0)) &&
           ((indexX !== this.height - 1) && (indexY !== this.width - 1))){
          indexX = Math.floor(Math.random() * (this.height));
          indexY = Math.floor(Math.random() * (this.width));
        }
        this.board[indexX][indexY] = this.itemArr[i];
      }
    }
    generateMap() {
      if (!this.generateMap) {
        this.board[0][0] = this.player;
        this.board = this.generateEnemys;
        this.board = this.generateItems;
        this.generateMapFlag = 1;
      } else {
        console.log("Board has already been generated.");
      }
    }
  
  }
  