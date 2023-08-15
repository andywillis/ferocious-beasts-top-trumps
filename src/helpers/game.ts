import { animals, decks } from '../store';

import shuffle from './shuffle';

function initialiseGame() {
	const shuffled = shuffle(animals.peek());
	const len = shuffled.length;
	const computerDeck = shuffled.slice(0, len / 2);
	const humanDeck = shuffled.slice(len / 2, len);
	decks.value.computer = computerDeck;
	decks.value.human = humanDeck;
}

export default initialiseGame;
