document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#newCard").addEventListener("click", drawCard);
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#messageEl");
let cardsEl = document.querySelector("#cardsEl");
let sumEl = document.querySelector("#sumEl");

function startGame() {
    const firstCard = Math.ceil(Math.random() * 11);
    console.log(firstCard);
    const secondCard = Math.ceil(Math.random() * 11);
    console.log(secondCard);
    const sum = firstCard + secondCard;

    if (sum < 21) {
        message = "Would you like to draw or fold?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "Congratulations, you have Blackjack.";
    } else {
        isAlive = false;
        message = "We're sorry, please try again.";
    }
    cardsEl.textContent = `Cards: ${firstCard} & ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;
    messageEl.textContent = message;
    console.log({ isAlive, hasBlackjack});
}

function drawCard() {
    console.log("Card drawn, here's an ace on the house.")
}