import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';
// import { GlobalKeyboardListener } from "node-global-key-listener";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const NUM_OF_ENEMIES = 10;
// const v = new GlobalKeyboardListener();
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

function openmenu() {
    console.log('~MOVEMENT~');
    console.log('1. Right 2. Left 3. Up 4. Down (write in lower case)');
}

function main() {
    let user = null;
    let enemies = generateArr('enemy');
    let items = generateArr('item');
    let board = new Board(enemies, items, user); 


    // readline.question(`What's your name ==> `, name => {
    // console.log(`Hi ${name}!`)
    // readline.close()
    // })

    console.log('~THE GAME~');
    console.log('___________');
    // console.log('--- Press ENTER for start ---');
    //     v.addListener((e) => {
    //       if (e.name === "RETURN") {
    //         console.log('--- Welcome ! ---');
    //         board.printBoard();
    //     }
    //     });

    rl.question('What is your name ==> ', name => {
        board.user = new User(name, 30, 10);
        console.info(`Hello ${name}, Welcome To The GAME!`);
    });

    while(!board.user.dead() && board.user.getPosition().x != size && board.user.getPosition().y != size) { //need to fix
        openmenu();
        rl.question('What is your move ? ', function (move) {
                board.move(move); // ??
        });
        let position =board[board.user.getPosition().x][board.user.getPosition().y];
        if(position instanceof Item){
            position.show();
            if(position.name === 'Trap')
                board.trap(position);
            else {
                rl.question('Do you want to grab it(yes or no)? ', function (answer) {
                    if(answer=='yes'){
                        board.user.grab(board[board.user.getPosition().x][board.user.getPosition().y]);
                    }
                });
            }
            rl.close();
        }
        if(position instanceof Enemy){
            fight(board.user,position);
        }
    }
    if(board.user.dead())
        console.log('You Are Dead!');
    if(board.user.getPosition().x == size && board.user.getPosition().y == size) //need to fix
        console.log('You Win!');

    rl.on('close', function () {
        console.log('\nBYE BYE !!!');
        process.exit(0);
        });
}        
        
main();
