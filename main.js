let cards = [];

let sum = 0;

let hasBlackjack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let newEl = document.getElementById("new");

let playerName = "Player";

let playerChip = Math.floor(Math.random() * 51);

let playerEl = document.getElementById("player-el");

playerEl.textContent = `${playerName}: $${playerChip}`;

function getRandomCard() {
	let randomNumbers = Math.floor(Math.random() * 13) + 1;
	if (randomNumbers > 10) {
		return 10;
	} else if (randomNumbers === 1){
		return 11;
	} else{
		return randomNumbers;
	}
}

const startGame = () => {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
	document.querySelector("#start").style.display = "none";
};

const renderGame = () => {
	cardsEl.textContent = `Cards: `;
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += `${cards[i]} `; 
		if(i < cards.length - 1 ){
			cardsEl.textContent += '+ ';
		}
	}
	sumEl.textContent = `Sum: ${sum}`;
	if (sum <= 20) {
		message ="Do you want to draw a new card?";
		isAlive = true;
	} else if (sum === 21) {
		message = "Whoo! You've got BlackJack!";
		hasBlackjack = true;
		isAlive = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
		document.querySelector("#start").style.display = "flex";
	}
	messageEl.textContent = message;
};

const newCard = () => {
	if(isAlive === true && hasBlackjack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
};