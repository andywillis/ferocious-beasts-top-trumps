import {
	availableMessages,
	cards,
	currentComputerCard,
	computerCardVisible,
	deckComputer,
	deckHuman,
	showNextRoundButton,
	messages,
	winner
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

	resetMessageBox();
	updateMessageBox(availableMessages.peek().humanstart);
	updateMessageBox(availableMessages.peek().clickstat);
}

/**
 * calculateWin
 *
 * @export
 * @param {string} name
 * @param {number} value
 */
export function calculateWin(animal: string, name: string, value: number) {

	computerCardVisible.value = true;

	const cardComputerDetails = getComputerCardDetails(name);

	resetMessageBox();

	if (value > cardComputerDetails.property.value) {
		winner.value = 'human';
		updateMessageBox(availableMessages.peek().humanwin);
		updateMessageBox(`(${toCapitalCase(animal)} beats ${toCapitalCase(cardComputerDetails.name)} on ${name})`);
	}

	if (cardComputerDetails.property.value > value) {
		winner.value = 'computer';
		updateMessageBox(availableMessages.peek().computerwin);
		updateMessageBox(`(${toCapitalCase(cardComputerDetails.name)} beats ${toCapitalCase(animal)} on ${name})`);
	}

	if (cardComputerDetails.property.value === value) {
		winner.value = 'tie';
		updateMessageBox(availableMessages.peek().tie);
	}

	showNextRoundButton.value = true;

}

/**
 * playNextRound
 *
 * @export
 */
export function playNextRound() {
	
	computerCardVisible.value = false;
	showNextRoundButton.value = false;

	resetMessageBox();

	if (winner.value === 'human') {
		const computerCard = deckComputer.value.pop() as CardType;
		const humanCard = deckHuman.value.pop() as CardType;
		deckHuman.value = [ humanCard, computerCard, ...deckHuman.peek() ];
		updateMessageBox(availableMessages.value.humanadded);
		updateMessageBox(availableMessages.value.clickstat);
	}

	if (winner.value === 'computer') {
		const humanCard = deckHuman.value.pop() as CardType;
		const computerCard = deckComputer.value.pop() as CardType;
		deckComputer.value = [ computerCard, humanCard, ...deckComputer.peek() ];
	}

	if (winner.value === 'tie') {
		// const computerCard = decks.value.computer.pop() as CardType;
		// decks.value.human.unshift(computerCard);
	}

}
