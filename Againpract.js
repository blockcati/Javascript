console.log("Welcome to the Number Guessing Game!");

let correctNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let guessedCorrectly = false;

while (attempts > 0 && !guessedCorrectly) {
  let userGuess = prompt("Guess a number between 1 and 10:");
  userGuess = Number(userGuess);

  if (userGuess === correctNumber) {
    console.log("Congratulations! You guessed the correct number!");
    guessedCorrectly = true;
  } else {
    attempts--;
    if (userGuess < correctNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log("Too high! Try again.");
    }

    console.log(`You have ${attempts} attempts left.`);
  }
}

if (!guessedCorrectly) {
  console.log("Sorry, you've run out of attempts. The correct number was " + correctNumber + ".");
} else {
  console.log("Thanks for playing!");
}
