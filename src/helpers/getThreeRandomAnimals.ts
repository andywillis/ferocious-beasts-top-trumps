import shuffle from './shuffle';

import { animals } from '../store';

/**
 * getThreeRandomAnimals
 *
 * Takes a copy at the animals state, shuffles
 * that copy, and returns the first three
 *
 * @return {array}
 */
function getThreeRandomAnimals() {
	return shuffle(animals.peek()).slice(0, 3);
}

export default getThreeRandomAnimals;
