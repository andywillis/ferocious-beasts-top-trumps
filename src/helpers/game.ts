import {
	availableMessages,
	cards,
	currentComputerCard,
	computerCardVisible,
	deckComputer,
	deckHuman,
	deckBoard,
	showNextRoundButton,
	messages,
	winner,
	humanCardInteractive
} from '../store';

import { CardType } from '../types';

import { toCapitalCase } from './string';

import { shuffleCards } from './cards';

/**
 * getComputerCardValue
 *
 * @param {string} name
 * @return {number}
 */
function getComputerCardDetails(name: string) {
	const card = currentComputerCard.peek();
	return {
		name: card?.name as string,
		property: {
			name,
			value: card?.properties.find(prop => prop.name === name)?.value as number
		}
	};
}

/**
 * getUUID
 *
 * Returns a unique id as a string
 *
 * @return {string}
 */
function getUUID() {
	return crypto.randomUUID();
}

/**
 * resetMessageBox
 *
 */
function resetMessageBox() {
	messages.value = [];
}

/**
 * updateMessageBox
 *
 * @param {string} message
 */
function updateMessageBox(message: string) {
	messages.value.push({ id: getUUID(), text: message });
}

/**
 * initialiseGame
 *
 * @export
 */
export function initialiseGame() {

	const shuffled = shuffleCards(cards.peek());
	const len = shuffled.length;
	deckComputer.value = shuffled.slice(0, len / 2);
	deckHuman.value = shuffled.slice(len / 2, len);

	computerCardVisible.value = false;
	humanCardInteractive.value = true;
	showNextRoundButton.value = false;
	winner.value = '';
	resetMessageBox();

	resetMessageBox();
	updateMessageBox(availableMessages.peek().humanplay);
	updateMessageBox(availableMessages.peek().clickstat);
}

/**
 * calculateWin
 *
 * We calculate a win after the human player has
 * clicked on an animal stat.
 *
 * @export
 * @param {string} name
 * @param {number} value
 */
export function calculateWin(animal: string, name: string, value: number) {

	computerCardVisible.value = true;
	humanCardInteractive.value = false;

	const cardComputerDetails = getComputerCardDetails(name);

	resetMessageBox();

	if (value > cardComputerDetails.property.value) {
		winner.value = 'human';
		updateMessageBox(availableMessages.peek().humanwin);
		updateMessageBox(`(${toCapitalCase(name)}: ${toCapitalCase(animal)} beats ${toCapitalCase(cardComputerDetails.name)})`);
	}

	if (cardComputerDetails.property.value > value) {
		winner.value = 'computer';
		updateMessageBox(availableMessages.peek().computerwin);
		updateMessageBox(`(${toCapitalCase(name)}: ${toCapitalCase(cardComputerDetails.name)} beats ${toCapitalCase(animal)})`);
	}

	if (cardComputerDetails.property.value === value) {
		winner.value = 'tie';
		updateMessageBox(availableMessages.peek().tie);
	}

	showNextRoundButton.value = true;

}

// function computerPlay() {
// 	//
// }

/**
 * playNextRound
 *
 * We calculate the new positions of the cards in the decks, and display a
 * corresponding message, only after clicking on the next round button.
 *
 * For each win we recreate a new deck with the computer/human cards,
 * and any cards on the board from a tie, and then update the losers deck.
 *
 * For a tie we add the cards to the board deck - whoever wins the next round
 * gets the losers's card, and all the cards on the board.
 *
 * @export
 */
export function playNextRound() {
	
	computerCardVisible.value = false;
	showNextRoundButton.value = false;
	humanCardInteractive.value = true;

	resetMessageBox();

	if (winner.value === 'human') {
		deckHuman.value = [
			deckHuman.value.at(-1) as CardType,
			deckComputer.value.at(-1) as CardType,
			...deckBoard.value,
			...deckHuman.value.slice(0, -1)
		];
		deckComputer.value = deckComputer.value.slice(0, -1);
		deckBoard.value = [];
		updateMessageBox(availableMessages.value.humanadded);
		updateMessageBox(availableMessages.value.clickstat);
	}

	if (winner.value === 'computer') {
		deckComputer.value = [
			deckComputer.value.at(-1) as CardType,
			deckHuman.value.at(-1) as CardType,
			...deckBoard.value,
			...deckComputer.value.slice(0, -1)
		];
		deckHuman.value = deckHuman.value.slice(0, -1);
		deckBoard.value = [];
		updateMessageBox(availableMessages.value.computeradded);
		updateMessageBox(availableMessages.value.computerplay);
		updateMessageBox(availableMessages.value.clickstat);
	}

	if (winner.value === 'tie') {
		deckBoard.value = [
			deckHuman.value.at(-1) as CardType,
			deckComputer.value.at(-1) as CardType,
			...deckBoard.value
		];
		deckComputer.value = deckComputer.value.slice(0, -1);
		deckHuman.value = deckHuman.value.slice(0, -1);
		updateMessageBox(availableMessages.value.boardadded);
		updateMessageBox(availableMessages.value.clickstat);
	}

	if (deckHuman.value.length === cards.value.length) {
		resetMessageBox();
		updateMessageBox(availableMessages.peek().humanwinner);
	}
	
	if (deckComputer.value.length === cards.value.length) {
		resetMessageBox();
		updateMessageBox(availableMessages.peek().computerwinner);
	}

}
