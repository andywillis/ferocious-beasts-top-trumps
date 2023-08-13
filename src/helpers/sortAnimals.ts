import { animals } from '../store';

function sortAnimals() {
	return animals.peek().sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
}

export default sortAnimals;
