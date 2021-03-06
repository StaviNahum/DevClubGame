import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

export class Board {
  constructor(enemies, items, user) {
    this.generateMapFlag = '0';
    this.enemies = enemies;
    this.items = items;
    this.user = user;
    this.height = 10;
    this.width = 10;
    this.board = new Array(this.height).fill(null).map(() => new Array(this.width).fill(null));
    this.board[0][0] = this.user;
    this.generate();
  }

  getCell(position){
    return this.board[position.y][position.x];
  }

  getFinishPosition() {
    return {'x': this.width-1, 'y': this.height-1}
  }

  getUser() {
    return this.user;
  }down

  // Fixxx
  trap(grabbedItem){
    this.user.sethealth(grabbedItem.amount);
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
    let cell = null;
    // this.board[0][0] = this.user;
    console.log('_________________________________________________');
    console.log(`|\tHealth:${this.user.health}  Attack: ${this.user.attack}  Defense: ${this.user.defense}\t|`);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    for (let i = 0; i < this.width; i++){
      for (let j = 0; j < this.height; j++){
        cell = this.board[i][j];
        if(cell !== null) {
          line += `|${cell.getIcon()}| `;
        }
        else {
          line += `|__| `
        }
      }
      console.log(line);
      line = "";
    }
  }

  fight(enemy){
    let round = 1;
    while(!this.user.dead() && !enemy.dead()){
      console.log (`[Fight] - Round: ${round}`);
      this.user.hit(enemy);
      if(enemy.dead()){
        let enemyIndex = this.enemies.findIndex((e) => {
                                                       e.name === enemy.name});
        delete this.enemies[enemyIndex];
        console.log('[Win] - You defeated your enemy Well Done!!');
        break;
      }
      enemy.hit(this.user);
      if(this.user.dead()){
          console.log('[Game Over] - You have been defeated!');
          break;
      }
      round++;
    }
  }

// The function gets the chosen direction. Update the new podition of the user and return it.
  getNewPosition(direction) {  
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
          return false;
        }
        break;
      case "down":
        if (y < this.height-1) {
          this.user.down();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
          return false;
        }
        break;
      case "right":
        if (x < this.width-1) {
          this.user.right();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
          return false;
        }
        break;
      case "left":
        if (y > 0) {
          this.user.left();
        }
        else {
          console.log(`[Error] - You are trying to move out side the board! Try another direction`);
          return false;
        }
        break;
      default:
        console.log("[Error] - Wrong direction");
        return false;
    }
    this.board[y][x] = null;
    let newPosition = this.user.getPosition();
    return newPosition;
  }

  // The function gets the new position of the user and update the position in the board
  move(newPosition) {
    const newX = newPosition.x;
    const newY = newPosition.y;
    this.board[newY][newX] = this.user;
  }
}
