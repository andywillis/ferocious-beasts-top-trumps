import shuffle from './shuffle';

import { animals } from '../store';

function getThreeRandomAnimals() {
	return shuffle(animals.peek()).slice(0, 3);
}

export default getThreeRandomAnimals;
