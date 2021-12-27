require('board.js');

function run( )
{
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "command> "
    });

    const user = user( "Brave Adventurer");
    console.log( "Hello Player");

    let where = maze[1];
    let session = ( command ) => where = _run( where, player, command );
    session( "l");
    rl.prompt();
    rl.on("line", (line) => {
        session( line.trim() )
        rl.prompt();
    }).on("close", ()=>{
        console.log( "Fare thee well brave adventurer");
    });
}
run();