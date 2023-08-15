import {
	availableMessages,
	cards,
	currentComputerCard,
	computerCardVisible,
	decks,
	messages
} from '../store';

import { shuffleCards } from './cards';

/**
 * getComputerCardValue
 *
 * @param {string} name
 * @return {number}
 */
function getComputerCardValue(name: string) {
	return currentComputerCard.peek()?.properties
		.find(prop => prop.name === name)?.value as number;
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
	const computerDeck = shuffled.slice(0, len / 2);
	const humanDeck = shuffled.slice(len / 2, len);

	decks.value.computer = computerDeck;
	decks.value.human = humanDeck;

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
export function calculateWin(name: string, value: number) {

	computerCardVisible.value = true;

	const computerValue = getComputerCardValue(name);
	console.log(computerValue, value);

	resetMessageBox();
	if (value > computerValue) {
		updateMessageBox(availableMessages.peek().humanwin);
	}
	if (computerValue > value) {
		updateMessageBox(availableMessages.peek().computerwin);
	}
	if (computerValue === value) {
		updateMessageBox(availableMessages.peek().tie);
	}
}
