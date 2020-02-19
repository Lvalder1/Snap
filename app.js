window.onload = () => {
  const playerHand = document.querySelector(".playerHand");
  const computerHand = document.querySelector(".computerHand");
  const playerPlay = document.getElementById("playerMove");
  const startGame = document.getElementById("startGame");

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
  // Shuffle deck
  const deck1 = new Deck();
  // console.log(deck1.deck);

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
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



let currentDeck = [];
  playerPlay.addEventListener("click", () => {
    playerHand.innerHTML = playerDeck[0].value;
    playerHand.innerHTML += playerDeck[0].suit;
    computerHand.innerHTML = computerDeck[0].value;
    computerHand.innerHTML += computerDeck[0].suit;
    currentDeck.push(playerDeck[0], computerDeck[0]);
    console.log(currentDeck);
    playerDeck.shift();
    computerDeck.shift();

if 
    
   })
    
}
