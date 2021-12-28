import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';
import readline from 'readline';

const NUM_OF_ENEMIES = 10;

function test(){
    let i=0;
    let user = new User('Player', 30, 10);
    let enemies = generateArr('enemy');
    let items = generateArr('item');
    let board = new Board(enemies, items, user); 
    while(i<100){
        board.move('right');
        i++;
    }
}
test();

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

    let user = new User('Player', 30, 10);
    let enemies = generateArr('enemy');
    let items = generateArr('item');
    let board = new Board(enemies, items, user); 

    console.log('~*~THE GAME~*~');
    console.log('~*~*~*~*~*~*~*~*~');

    const ans = await askQuestion("What is your name? ");
    console.log('Hello '+ans+' Welcome to the Game!\n');
    console.log('~*~*~*~*~*~*~*~*~');
    user.setName(ans);

    while(!user.dead()&&board.user.getPosition().x!=board.height && board.user.getPosition().y!=board.height) { //need to fix
        const ans = await askQuestion('Where do you want to move? -use keyboard.-\n');
        board.move(ans);

        let tool =board.indexGet(board.user.getPosition().x,board.user.getPosition().y);
        if(tool instanceof Item) {
            tool.show();
            if(tool.name=='Trap')
                board.trap(tool);
            else{
                console.log('Do you want to grab it?');
                v.addListener((e) => {
                    if (e.name === "Y" && e.state == "DOWN") {
                        user.grab(board[user.possion.x][user.possion.y]);
                    }
                    if (e.name === "N" && e.state == "DOWN")
                    return;
                });
            }
        }
        if(tool instanceof Enemy){
            fight(user,tool);
        }
    }
    if(user.dead())
        console.log('You Are Dead!');
    if(user.possion.x==size&&user.possion.y==size) //need to fix
        console.log('You Win!');
}
           
main();

