import { animals, decks, messages } from '../store';

import shuffle from './shuffle';

function getUUID() {
	return crypto.randomUUID();
}

export function updateMessageBox(message: string) {
	messages.value.push({ id: getUUID(), text: message });
}

export function initialiseGame() {
	const shuffled = shuffle(animals.peek());
	const len = shuffled.length;
	const computerDeck = shuffled.slice(0, len / 2);
	const humanDeck = shuffled.slice(len / 2, len);
	decks.value.computer = computerDeck;
	decks.value.human = humanDeck;
	updateMessageBox('Human player to start -->');
}

export function calculateWin(name: string, value: number) {
	console.log(name, value);
}
