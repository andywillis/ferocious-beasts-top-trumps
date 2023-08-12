import { AnimalType } from '../types';

/**
 * Fisher-Yates Shuffle
 *
 * @param {AnimalType[]} arr
 * @return {AnimalType[]}
 */
function shuffle(arr: AnimalType[]) {

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
