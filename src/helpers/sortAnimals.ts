import { animals } from '../store';

/**
 * sortAnimals
 *
 * Returns an array of animals sorted by name
 *
 * @return {array}
 */
function sortAnimals() {
	return animals.peek().sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
}

export default sortAnimals;
