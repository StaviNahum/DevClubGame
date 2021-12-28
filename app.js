import { Board } from './board.js';
import { User } from './user.js';
import { Enemy } from './enemy.js';
import { Item } from './item.js';

// function run( )
// {
//     let rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         prompt: "command> "
//     });

//     const user = user( "Brave Adventurer");
//     console.log( "Hello Player");

//     let where = maze[1];
//     let session = ( command ) => where = _run( where, player, command );
//     session( "l");
//     rl.prompt();
//     rl.on("line", (line) => {
//         session( line.trim() )
//         rl.prompt();
//     }).on("close", ()=>{
//         console.log( "Fare thee well brave adventurer");
//     });
// }
// run();

// let newItem= new Item();
// newItem.show();





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
}


function run() {

    let user = new User('Bar', 10, 10);
    let enemies = generateArr('enemy');
    let items = generateArr('item');
    let board = new Board(enemies, items, user); 
    board.printBoard();
}

run();

