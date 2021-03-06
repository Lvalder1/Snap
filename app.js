window.onload = () => {
  const playerHandValue = document.querySelector(".playerHandValue");
  const playerHandSuit = document.querySelector(".playerHandSuit");
  const computerHandValue = document.querySelector(".computerHandValue");
  const computerHandSuit = document.querySelector(".computerHandSuit");
  const playerPlay = document.getElementById("playerMove");
  const snap = document.getElementById("snap");
  const result = document.querySelector(".winCondition");
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
console.log(result);
  // Card deck
  class Deck {
    constructor() {
      this.deck = [];

      const suits = ['♠︎', '♥︎', '♣︎', '♦︎'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

      if (playerHandSuit === '♥︎' || '♦︎' ) {
        playerHandSuit.style.color = "red";
        playerHandValue.style.color = "red";

      } else if (playerHandSuit === '♣︎' || '♠︎' ) {
        playerHandSuit.style.color = "black";
        playerHandValue.style.color = "black";
      }

      if (computerHandSuit === '♥︎' || '♦︎'  ) {
        computerHandSuit.style.color = "red";
        computerHandValue.style.color = "red";

      } else if (computerHandSuit === '♣︎' || '♠︎' ) {
        computerHandValue.style.color = "black";
        computerHandSuit.style.color = "black";
      }

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
    let min = 5;
    let max = 10;
    let timeResult = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    return timeResult;
  }

  console.log(timer());
  let currentDeck = [];
  let playerWon = false;
  let computerWon = false;
  let computerScoreResult = 0;
  let playerScoreResult = 0;

  const handlePlayerClick = () => {
    playerHandValue.innerHTML = playerDeck[0].value;
    playerHandSuit.innerHTML = playerDeck[0].suit;
    computerHandValue.innerHTML = computerDeck[0].value;
    computerHandSuit.innerHTML = computerDeck[0].suit;
    currentDeck.unshift(playerDeck[0], computerDeck[0]);
    console.log(currentDeck);
    playerDeck.shift();
    computerDeck.shift();
    if (currentDeck[0].value === currentDeck[1].value) {
      const interval = timer();
      setTimeout(() => {
        if (playerWon === false) {
          result.innerHTML = "Computer Snap!";
          // playerPlay.removeEventListener("click", handlePlayerClick);
          computerScoreResult++;
          computerScore.innerHTML = computerScoreResult;
          computerDeck.push(...currentDeck);
          console.log(computerDeck);
          // computerWon = false;
        }
      }, interval);
    } else {
      if (currentDeck.length === 52 & computerScoreResult > playerScoreResult || playerDeck.length === 0 & playerDeck.length < computerDeck.length) {
        result.innerHTML = "Computer Wins!";
      } else if (currentDeck.length === 52 & playerScoreResult > computerScoreResult || computerDeck.length === 0 & computerDeck.length < playerDeck.length) {
        result.innerHTML = "Player Wins!"
      } else if (currentDeck.length === 52 & playerScoreResult === computerScoreResult) {
        result.innerHTML = "Draw!";
      } 
    }
  }

  const handleSnap = () => {
    if (currentDeck[0].value === currentDeck[1].value) {
      if (computerWon === false) {
        result.innerHTML = "Player Snap!";
        // snap.removeEventListener("click", handleSnap);
        playerScoreResult++;
        playerScore.innerHTML = playerScoreResult;
        playerDeck.push(...currentDeck);
        // playerWon = false;
      }
    } else {
      result.innerHTML = "No Snap!";
    }
  }

  playerPlay.addEventListener("click", handlePlayerClick);
  snap.addEventListener("click", handleSnap);
}
