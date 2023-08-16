import { CardType, PropertyType } from '../types';

/**
 * Fisher-Yates Shuffle
 * https://stackoverflow.com/a/59837259/1377002
 *
 * @param {CardType[] | PropertyType[]} arr
 * @return {CardType[] | PropertyType[]}
 */
export function shuffleArray(arr: object[]) {

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
 * getRandomCards
 *
 * Accept some cards, shuffles
 * them, and return an array of cards the length of
 * which is determined by the number param
 *
 * @param {CardType[]} cards
 * @param {number} number
 * @return {CardType[]}
 */
export function getRandomCards(cards: CardType[], number: number) {
	return shuffleArray(cards).slice(0, number) as CardType[];
}

/**
 * getRandomProperties
 *
 * Takes a copy at the cards state, shuffles
 * that copy, and returns the first three
 *
 * @return {array}
 */
export function getRandomProperties(properties: PropertyType[], number: number) {
	return shuffleArray(properties).slice(0, number) as PropertyType[];
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
