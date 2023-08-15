import {
	availableMessages,
	cards,
	decks,
	messages
} from '../store';

import { shuffleCards } from './cards';

function getUUID() {
	return crypto.randomUUID();
}

export function updateMessageBox(message: string) {
	messages.value.push({ id: getUUID(), text: message });
}

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
	console.log(name, value);
}
