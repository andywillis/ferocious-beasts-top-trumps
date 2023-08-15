import {
	availableMessages,
	cards,
	computerCardVisible,
	decks,
	messages
} from '../store';

import { shuffleCards } from './cards';

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
	updateMessageBox(availableMessages.peek().humanstart);
	updateMessageBox(availableMessages.peek().clickstat);
}

export function calculateWin(name: string, value: number) {
	computerCardVisible.value = true;
	console.log(name, value);
}
