import { cards } from '../store';

import { CardType } from '../types';

/**
 * Fisher-Yates Shuffle
 * https://stackoverflow.com/a/59837259/1377002
 *
 * @param {CardType[]} arr
 * @return {CardType[]}
 */
export function shuffleCards(arr: CardType[]) {

	const arrTemp = structuredClone(arr);
	let i = arrTemp.length;
	let j;
	let temp;
	
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}

	return arr;

}

/**
 * getThreeRandomCards
 *
 * Takes a copy at the cards state, shuffles
 * that copy, and returns the first three
 *
 * @return {array}
 */
export function getThreeRandomCards() {
	return shuffleCards(cards.peek()).slice(0, 3);
}

/**
 * sortCards
 *
 * Returns an array of cards sorted by name
 *
 * @return {array}
 */
export function sortCards(cards: CardType[]) {
	return cards.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
}
