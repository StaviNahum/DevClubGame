import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';
import readline from 'readline';

const NUM_OF_ENEMIES = 10;

// function test(){
//     let i=0;
//     let user = new User('Player', 30, 10);
//     let enemies = generateArr('enemy');
//     let items = generateArr('item');
//     let board = new Board(enemies, items, user); 
//     while(i<100){
//         board.move('right');
//         board.printBoard();
//         i++;
//     }
// }
// test();

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
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function main(){

    let user = null;
    let enemies = generateArr('enemy');
    let items = generateArr('item');

    console.log('~*~THE GAME~*~');
    console.log('~*~*~*~*~*~*~*~*~');

    // Get username from user
    const username = await askQuestion("What is your name? ");
    console.log(`Hello ${username} Welcome to the Game!\n`);
    console.log('~*~*~*~*~*~*~*~*~');
    user = new User(username, 30, 10);

    // Create the game board
    let board = new Board(enemies, items, user); 
    board.printBoard();

    while(!board.user.dead() && board.user.getPosition() !== board.getFinishPosition()) {
        const ans = await askQuestion('Where do you want to move? -use keyboard.-\n');
        const newPosition = board.getNewPosition(ans);
        if(newPosition) {
            let cell = board.getCell(newPosition);
            if(cell instanceof Item) {
                cell.show();
                if(cell.name ==='Trap')
                    board.trap(cell);
                else{
                    console.log('Do you want to grab it?');
                    v.addListener((e) => {
                        if (e.name === "Y" && e.state == "DOWN") {
                            user.grab(board[board.user.getPosition().x][board.user.getPosition().y]);
                        }
                        if (e.name === "N" && e.state == "DOWN")
                        return;
                    });
                }
            }
            if(cell instanceof Enemy){
                fight(user,cell);
            }
            board.move(newPosition);
            board.printBoard();
        }
    }
    if(board.user.dead())
        console.log('You Are Dead!');
    if(user.getPosition() === board.getFinishPosition())
        console.log('You Win!');
}           
main();