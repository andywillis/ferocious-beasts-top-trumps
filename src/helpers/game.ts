import {
	availableMessages,
	cards,
	currentComputerCard,
	currentHumanCard,
	computerCardVisible,
	humanCardVisible,
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

import { getRandomProperties, shuffleArray } from './cards';

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
 * getHumanCardValue
 *
 * @param {string} name
 * @return {number}
 */
function getHumanCardDetails(name: string) {
	const card = currentHumanCard.peek();
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
function updateMessageBox(message: string, type?: string) {
	messages.value.push({
		id: getUUID(),
		type,
		text: message
	});
}

/**
 * initialiseGame
 *
 * Reset state, update the message box
 *
 * @export
 */
export function initialiseGame() {

	const shuffled = shuffleArray(cards.peek()) as CardType[];
	const len = shuffled.length;
	deckComputer.value = shuffled.slice(0, len / 2);
	deckHuman.value = shuffled.slice(len / 2, len);
	deckBoard.value = [];

	computerCardVisible.value = false;
	humanCardVisible.value = true;
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
export function calculateWin(animal: string, name: string, value: number, type: string) {

	computerCardVisible.value = true;
	humanCardInteractive.value = false;

	resetMessageBox();

	if (type === 'human') {

		const cardComputerDetails = getComputerCardDetails(name);

		if (value > cardComputerDetails.property.value) {
			winner.value = 'human';
			updateMessageBox(availableMessages.peek().humanwin);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(animal)}
				(${value}) 
				beats 
				${toCapitalCase(cardComputerDetails.name)}
				(${cardComputerDetails.property.value})
			`);
		}
	
		if (cardComputerDetails.property.value > value) {
			winner.value = 'computer';
			updateMessageBox(availableMessages.peek().computerwin);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(cardComputerDetails.name)} 
				(${cardComputerDetails.property.value})
				beats 
				${toCapitalCase(animal)}
				(${value})
			`);
		}
	
		if (cardComputerDetails.property.value === value) {
			winner.value = 'tie';
			updateMessageBox(availableMessages.peek().tie);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(cardComputerDetails.name)} 
				(${cardComputerDetails.property.value})
				matches 
				${toCapitalCase(animal)}
				(${value})
			`);
		}

		showNextRoundButton.value = true;

	}

	if (type === 'computer') {

		updateMessageBox('Computer to play. ');

		const cardHumanDetails = getHumanCardDetails(name);

		if (value > cardHumanDetails.property.value) {
			winner.value = 'computer';
			updateMessageBox(availableMessages.peek().computerwin);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(animal)} 
				(${value})
				beats 
				${toCapitalCase(cardHumanDetails.name)}
				(${cardHumanDetails.property.value})
			`);
		}
	
		if (cardHumanDetails.property.value > value) {
			winner.value = 'human';
			updateMessageBox(availableMessages.peek().humanwin);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(cardHumanDetails.name)} 
				(${cardHumanDetails.property.value})
				beats 
				${toCapitalCase(animal)}
				(${value})
			`);
		}
	
		if (cardHumanDetails.property.value === value) {
			winner.value = 'tie';
			updateMessageBox(availableMessages.peek().tie);
			updateMessageBox(toCapitalCase(name), 'underline');
			updateMessageBox(`
				${toCapitalCase(cardHumanDetails.name)} 
				(${cardHumanDetails.property.value})
				matches 
				${toCapitalCase(animal)}
				(${value})
			`);
		}

		showNextRoundButton.value = true;
		
	}

}

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
	
	resetMessageBox();

	if (winner.value === 'human') {

		// Update the human deck
		deckHuman.value = [
			deckHuman.value.at(-1) as CardType,
			deckComputer.value.at(-1) as CardType,
			...deckBoard.value,
			...deckHuman.value.slice(0, -1)
		];

		// Update the computer and board decks
		deckComputer.value = deckComputer.value.slice(0, -1);
		deckBoard.value = [];

		// Update board state
		computerCardVisible.value = false;
		showNextRoundButton.value = false;
		humanCardInteractive.value = true;

		// Update message box
		updateMessageBox(availableMessages.value.humanadded);
		updateMessageBox(availableMessages.value.clickstat);
	}

	if (winner.value === 'computer') {

		// Update computer deck
		deckComputer.value = [
			deckComputer.value.at(-1) as CardType,
			deckHuman.value.at(-1) as CardType,
			...deckBoard.value,
			...deckComputer.value.slice(0, -1)
		];

		// Update human and board decks
		deckHuman.value = deckHuman.value.slice(0, -1);
		deckBoard.value = [];

		// Update board state
		computerCardVisible.value = true;
		showNextRoundButton.value = false;
		humanCardInteractive.value = false;

		// Update message box
		updateMessageBox(availableMessages.value.computeradded);
		updateMessageBox(availableMessages.value.computerplay);

		// Since the computer won we need to play its next hand
		// So we grab the face card, extract a random property
		// and pass the arguments to the calculateWin function
		const computerCard = deckComputer.value.at(-1) as CardType;
		const animal = computerCard.name;
		const properties = getRandomProperties(computerCard.properties, 1);
		const { name, value } = properties[0];
		calculateWin(animal, name, Number(value), 'computer');
	}

	if (winner.value === 'tie') {

		// Update the board deck
		deckBoard.value = [
			deckHuman.value.at(-1) as CardType,
			deckComputer.value.at(-1) as CardType,
			...deckBoard.value
		];

		// Update the computer and human decks
		deckComputer.value = deckComputer.value.slice(0, -1);
		deckHuman.value = deckHuman.value.slice(0, -1);

		// Update the board state
		computerCardVisible.value = false;
		showNextRoundButton.value = false;
		humanCardInteractive.value = true;

		// Update the message box
		updateMessageBox(availableMessages.value.boardadded);
		updateMessageBox(availableMessages.value.clickstat);
	}

	// Finally we work out, following all the changes, whether
	// either the computer or human player has won, and update the
	// the board accordingly
	if (deckHuman.value.length === cards.value.length) {
		computerCardVisible.value = false;
		humanCardVisible.value = false;
		resetMessageBox();
		updateMessageBox(availableMessages.peek().humanwinner);
	}
	
	if (deckComputer.value.length === cards.value.length) {
		computerCardVisible.value = false;
		humanCardVisible.value = false;
		resetMessageBox();
		updateMessageBox(availableMessages.peek().computerwinner);
	}

}
