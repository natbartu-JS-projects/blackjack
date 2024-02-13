let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let hiddenButton = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let gameOverMessage = document.getElementById("game-over-message");
let newCardEl = document.getElementById("newCard");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function hiddenBtnEl() {
  let hideNewCardBtn = newCardEl;
  hideNewCardBtn.style.visibility = "hidden";
}
hiddenBtnEl();

function showBtnEl() {
  let showBtn = newCardEl;
  showBtn.style.visibility = "visible";
}

function startGame() {
  showBtnEl();
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardEl.textContent = "";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    hiddenBtnEl();
  }

  sumEl.textContent = sum;
  gameOverMessage.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
