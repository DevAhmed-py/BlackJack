let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageE = document.getElementById("message-e");
let sumE = document.getElementById("sum-e");
let cardE = document.getElementById("card-e");

let player = {
    Name: "Dan",
    Chips: 120
}

let playerE = document.getElementById("player-e")
playerE.textContent = player.Name + ": $" + player.Chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } 
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    sumE.textContent = "Sum: " + sum;
    cardE.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardE.textContent += cards[i] + " ";
    }
    
    if (sum === 21) {
        message = "Congrats! You've got a Black Jack";
        hasBlackJack = true;
    }
    else if (sum <= 20) {
        message = "Do you want an extra card?";
    }
    else {
        message = "Sorry, You're out of the game!";
        isAlive = false;
    }

    messageE.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);

        renderGame();
    }
}