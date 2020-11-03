const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("What's your name? Nicknames are fine too! :) ", (ansName) => {
  rl.question("What are your hobbies? ", (ansHobbies) => {
    rl.question("Favourite music? ", (ansMusic) => {
      rl.question("Which meal is your favourite? ", (ansMeal) => {
        rl.question("Which is your favourite sport? ", (ansSport) => {
          rl.question("What is your superpower? ", (ansPower) => {
            console.log(`${ansName} loves listening to ${ansMusic} while ${ansHobbies}. After ${ansMeal}, ${ansSport} is up next. ${ansName} is also ${ansPower}!`);
            rl.close();
          })
        })
      })
    })
  })
});