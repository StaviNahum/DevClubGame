class Logger {
    constructor(funcStr, message) {
        this.message = message;
        console.info(`[${funcStr}] - ${message}`);
    }
}

// import { readline } from 'readline';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// const prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//   if (err) {
//     return onErr(err);
//   }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);
//   console.log('  Email: ' + result.email);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })