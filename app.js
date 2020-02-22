window.onload = () => {
  const playerHandValue = document.querySelector(".playerHandValue");
  const playerHandSuit = document.querySelector(".playerHandSuit");
  const computerHandValue = document.querySelector(".computerHandValue");
  const computerHandSuit = document.querySelector(".computerHandSuit");
  const playerPlay = document.getElementById("playerMove");
  const snap = document.getElementById("snap");
  const result = document.querySelector(".result");
console.log(result);
  // Card deck
  class Deck {
    constructor() {
      this.deck = [];

      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

      for (let suit in suits) {
        for (let value in values) {
          const card = {
            value: values[value],
            suit: suits[suit]
          }
          this.deck.push(card);
        }
      }
    }
  }
  const deck1 = new Deck();


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  let arr = deck1.deck;
  arr = shuffle(arr);
  console.log(arr);

  let playerDeck = [];
  let computerDeck = [];

  //Split into player and computer deck

  for (i = 0; i <= arr.length; i = i + 2) {
    if (arr[i] !== undefined) {
      playerDeck.push(arr[i]);
      computerDeck.push(arr[i + 1]);
    }
  }
  console.log(playerDeck, computerDeck);

  let timer = () => {
    let min = 1.5;
    let max = 3;
    let timeResult = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    return timeResult;
  }


  let currentDeck = [];
  let playerWon = false;
  let computerWon = false;

  playerPlay.addEventListener("click", () => {
    playerHandValue.innerHTML = playerDeck[0].value;
    playerHandSuit.innerHTML = playerDeck[0].suit;
    computerHandValue.innerHTML = computerDeck[0].value;
    computerHandSuit.innerHTML = computerDeck[0].suit;
    currentDeck.unshift(playerDeck[0], computerDeck[0]);
    playerDeck.shift();
    computerDeck.shift();
    console.log(currentDeck);
    if (currentDeck[0].value === currentDeck[1].value) {
      const interval = timer();
      setTimeout(() => {
        if (playerWon === false) {
          result.innerHTML = "Computer Snap!";
          computerWon = true;
        }
      }, interval);
    }
  });

  snap.addEventListener("click", () => {
    if (currentDeck[0].value === currentDeck[1].value) {
      if (computerWon === false) {
        result.innerHTML = "Player Snap!";
        playerWon = true;
      }
    } else {
      result.innerHTML = "No Snap!";
    }
  });
}
