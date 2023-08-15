import { CardType } from '../types';

/**
 * Fisher-Yates Shuffle
 * https://stackoverflow.com/a/59837259/1377002
 *
 * @param {CardType[]} arr
 * @return {CardType[]}
 */
function shuffle(arr: CardType[]) {

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

export default shuffle;
