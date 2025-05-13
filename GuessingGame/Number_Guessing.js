const max = 100;
const min = 1;

// Generate a random number
let randomNumber = Math.floor(Math.random() * (max - min) + min);

let newNumber;

while (newNumber !== randomNumber) {
    newNumber = parseInt(window.prompt("Enter a number between 1 and 100"));

    // Check if the input is a valid number
    if (isNaN(newNumber)) {
        window.alert("Please enter a valid number.");
    } else if (newNumber < randomNumber) {
        window.alert("You guessed too low.");
    } else if (newNumber > randomNumber) {
        window.alert("You guessed too high.");
    } else {
        window.alert("You guessed the correct number!");
    }
}
