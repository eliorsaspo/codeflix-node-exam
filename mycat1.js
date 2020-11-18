const mot = require('readline');

const rl = mot.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ecrit un mot ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`${answer}`);

  rl.close();
});