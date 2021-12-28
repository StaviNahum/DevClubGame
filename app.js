import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

const NUM_OF_ENEMIES = 10;

function generateArr(arrType) {
    let arr = [];
    for (let i = 0; i < NUM_OF_ENEMIES; i++) {
        if (arrType === 'enemy') {
            arr[i] = new Enemy();
        }
        else if (arrType === 'item') {
            arr[i] = new Item();
        }        
    }
    return arr;
}

function run() {

    let user = new User('Bar', 10, 10);
    let enemies = generateArr('enemy');
    let items = generateArr('item');
    let board = new Board(enemies, items, user); 
    board.printBoard();
}

run();

// function fight(user,enemy){

// let round=1;
//     while(!user.dead()&&!enemy.dead()){
//         console.log ('Round: ' +round);
//         round++;
//         enemy.beenAttacked(user);
//         if(enemy.dead()){
//             console.log('You defeat your enemy Well Done!');
//             break;
//         }
//         user.beenAttacked(enemy);
//         if(user.dead()){
//             console.log('You are dead!');
//             break;
//         }
//     }
// }

function openmenu(){
    console.log('~MOVEMENT~');
    console.log('1. Right 2. Left 3. Up 4. Down');
}

function main(){
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('~THE GAME~');
console.log('___________');

rl.question('What is your name ? ', function (name) {
    let newUser = new User(name,30,10);
    console.log(`Hello ${name}, Welcome To The GAME!`)
      rl.close();
    });
    while(!newUser.dead() && newUser.getPossion().x!=size && newUser.possion.y!=size){ //need to fix
        openmenu();
        rl.question('What is your move ? ', function (move) {
            board.move(); // ??
            
            if(board[newUser.possion.x][newUser.possion.y] instanceof Item){
                board[newUser.possion.x][newUser.possion.y].grab();
            }
            if(board[newUser.possion.x][newUser.possion.y] instanceof Enemy){
                fight(newUser,board[newUser.possion.x][newUser.possion.y]);
            }
              rl.close();
            });
            if(newUser.dead())
            console.log('You Are Dead!');
            if(newUser.possion.x==size&&newUser.possion.y==size) //need to fix
            console.log('You Win!');
    }
 
  rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });
}
main();
