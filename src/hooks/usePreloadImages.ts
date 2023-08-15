import { cards } from '../store';

function usePreloadImages() {
	cards.value.forEach(card => {
		const img = new Image();
		img.src = card.image.name;
	});
}

export default usePreloadImages;
