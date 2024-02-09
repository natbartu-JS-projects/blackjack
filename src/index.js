let cardOne = document.getElementById("card1");
let cardTwo = document.getElementById("card2");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let gameOverMessage = document.getElementById("game-over-message");

let firstCard = 12;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  cardOne.textContent = firstCard;
  cardTwo.textContent = secondCard;
  gameOverMessage.textContent = message;
  sumEl.textContent = sum;
}
