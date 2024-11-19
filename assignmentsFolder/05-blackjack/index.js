let firstCard = 10;
let secondCard = 11;
let hasBlackjack = false;
let isAlive = true;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Would you like to draw another card or fold?");
} else if (sum === 21) {
    hasBlackjack = true;
    console.log("Congratulations, you have Blackjack!");
} else {
    isAlive = false;
    console.log("We're sorry, you lose. Please try again.");
}

// Cash out!
console.log(isAlive);
console.log(hasBlackjack);