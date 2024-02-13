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
let newGameEl = document.getElementById("newGame");

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

function disableNewCard() {
  let hideNewCardBtn = newCardEl;
  hideNewCardBtn.style.visibility = "hidden";
}
disableNewCard();

function showNewCard() {
  disableStartGameBtn();
  let showBtn = newCardEl;
  showBtn.style.visibility = "visible";
}

function disableStartGameBtn() {
  let hideStartGameBtn = newGameEl;
  hideStartGameBtn.style.visibility = "hidden";
}

function showStartGameBtn() {
  let showStartGameBtn = newGameEl;
  showStartGameBtn.style.visibility = "visible";
}

function startGame() {
  showNewCard();
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
    showStartGameBtn();
    disableNewCard();
  } else {
    message = "You're out of the game!";
    isAlive = false;
    disableNewCard();
    showStartGameBtn();
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
