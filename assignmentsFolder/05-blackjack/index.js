let firstCard = Math.ceil(Math.random () * 11);
let secondCard = Math.ceil(Math.random () * 11);
console.log(firstCard)
console.log(secondCard)
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

if (sum < 21) {
    message = "Would you like to draw or fold?";
} else if (sum === 21) {
    hasBlackjack = true;
    message = "Congratulations, you have BlackJack.";
} else {
    isAlive = false;
    message = "We're sorry, please try again.";
}

// Cash out!
console.log(isAlive);
console.log(hasBlackjack);
console.log(message);