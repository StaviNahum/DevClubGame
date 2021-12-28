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
    this.board = new Array(this.height).fill(null).map(() => new Array(this.width).fill(null));
    this.generate();
  }

  trap(trap){
    this.sethealth(grabbedItem.amount);
  }
  generate() {
    let x;
    let y;
    // Generate enemies array
    for (let i = 0; i < this.enemies.length; i++){
      x = Math.floor(Math.random() * (this.height - 2)) + 1;
      y = Math.floor(Math.random() * (this.width - 2)) + 1;
      while (this.board[x][y] !== null){
        x = Math.floor(Math.random() * (this.height));
        y = Math.floor(Math.random() * (this.width));
      }
      this.board[x][y] = this.enemies[i];
    }

    //Generate items array
    for (let i = 0; i < this.items.length; i++){
      x = Math.floor(Math.random() * (this.height - 2)) + 1;
      y = Math.floor(Math.random() * (this.width - 2)) + 1;
      while (this.board[x][y] !== null){
        x = Math.floor(Math.random() * (this.height));
        y = Math.floor(Math.random() * (this.width));
      }
      this.board[x][y] = this.items[i];
    }
  }

  printBoard() {
    let line = "";
    this.board[0][0] = this.user;
    for (let i = 0; i < this.height; i++){
        for (let j = 0; j < this.width; j++){
            if (this.board[i][j] !== this.user){
              line += "|_|";
            }
            else{
              line += "|U|";
            }
        }
        console.log(line);
        line = "";
    }
  }

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

  fight(enemy){
    let round = 1;
        while(!this.user.dead() && !enemy.dead()){
          console.log (`[Fight] - Round: ${round}`);
          user.attack(enemy);
          if(enemy.dead()){
            let enemyIndex = this.enemies.findIndex(enemy);
            delete this.enemies[enemyIndex];
            console.log('[Win] - You defeated your enemy Well Done!!');
            break;
          }
          enemy.attack(user);
          if(user.dead()){
              console.log('[Game Over] - You have been defeated!');
              break;
          }
          round++;
        }
  }

  move(direction) {
    const position = this.user.getPosition();
    const x = position.x
    const y = position.y;

    switch(direction){
      case "up":
        if (y > 0) {
          this.user.up();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
        }
        break;
      case "down":
        if (y < this.height-1) {
          this.user.down();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
        }
        break;
      case "right":
        if (x < this.width-1) {
          this.user.right();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
        }
        break;
      case "left":
        if (y > 0) {
          this.user.left();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
        }
        break;
      default:
        console.log("[Error] - Wrong direction");
        break;
    }
  }
}
