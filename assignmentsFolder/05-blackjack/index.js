// Event listeners.
document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#newCard").addEventListener("click", drawCard);

// Global variables.
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;
let cards = [];

const messageEl = document.querySelector("#messageEl")
const cardsEl = document.querySelector("#cardsEl")
const sumEl = document.querySelector("#sumEl")

// Random card generation
function randomCard() {
    return Math.ceil(Math.random() * 11)
}

// update the game status.
function gameUpdate() {
    if (sum < 21) {
        message = "Would you like to draw or fold?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "Congratulations, you have Blackjack.";
    } else {
        isAlive = false;
        message = "We're sorry, please try again.";
    }
    // Update the UI
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards.join(" & ")}`;
}

function startGame() {
    hasBlackJack = false;
    isAlive = true;
    cards = [randomCard(), randomCard()];
    sum = cards.reduce((acc, card) => acc + card, 0);

    // Call the gameUpdate function.
    gameUpdate();
}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        const newCard = randomCard();
        cards.push(newCard);
        sum += newCard; 

        gameUpdate();
    }
}