import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';
import { GlobalKeyboardListener } from "node-global-key-listener";

const NUM_OF_ENEMIES = 10;
const v = new GlobalKeyboardListener();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

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

function fight(user,enemy){

let round=1;
    while(!user.dead()&&!enemy.dead()){
        console.log ('Round: ' +round);
        round++;
        enemy.beenAttacked(user);
        if(enemy.dead()){
            console.log('You defeat your enemy Well Done!');
            break;
        }
        user.beenAttacked(enemy);
        if(user.dead()){
            console.log('You are dead!');
            break;
        }
    }
}

function openmenu(){
    console.log('~MOVEMENT~');
    console.log('1. Right 2. Left 3. Up 4. Down (write in lower case)');
}

function main(){
let user = new User('New', 30, 10);
let enemies = generateArr('enemy');
let items = generateArr('item');
let board = new Board(enemies, items, user); 


console.log('~*~THE GAME~*~');
console.log('___________');
// console.log('--- Press ENTER for start ---');
//     v.addListener((e) => {
//       if (e.name === "RETURN") {
//         console.log('--- Welcome ! ---');
//         board.printBoard();
//     }
//     });

rl.question('What is your name ? ', function (name) {
        user.setName(name);
        console.log(`Hello ${name}, Welcome To The GAME!`)
        });
        while(!user.dead()&&user.possion.x!=size&&user.possion.y!=size){ //need to fix
            openmenu();
            rl.question('What is your move ? ', function (move) {
                    board.move(move); // ??
        });
        let position =board[user.possion.x][user.possion.y];
            if(position instanceof Item){
                    position.show();
                    if(position.name=='Trap')
                        board.trap(position);
                        else{
                                rl.question('Do you want to grab it(yes or no)? ', function (answer) {
                                        if(answer=='yes'){
                                                user.grab(board[user.possion.x][user.possion.y]);
                            }
                        });
                    }
                      rl.close();
                }
            if(position instanceof Enemy){
                    fight(user,position);
                }
            }
                if(user.dead())
                console.log('You Are Dead!');
                if(user.possion.x==size&&user.possion.y==size) //need to fix
                console.log('You Win!');
    
      rl.on('close', function () {
            console.log('\nBYE BYE !!!');
            process.exit(0);
          });
    }
        
        
        
main();
