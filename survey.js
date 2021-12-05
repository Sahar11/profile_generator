const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (mealTime) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sports) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (power) => {

  console.log(`${answer} loves listening to ${music} while ${activity}, devouring ${food} for ${mealTime}, prefers ${sports} over any other sport, and is amazing at ${power}.`);

  rl.close();
            });
          });
        });
      });
    });
  });
});

