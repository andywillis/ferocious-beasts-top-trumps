import { Status, Card } from '../index';

import { CardType } from '../../types';

import {
	computerCardVisible,
	humanCardInteractive,
	humanCardVisible
} from '../../store';

interface DeckProps {
	type: string;
	deck: CardType[];
	totalCards: number;
	interactive?: boolean
}

/**
 * Deck
 *
 * The player (human/computer) deck
 *
 * @param {DeckProps} { deck }
 * @return {React.Element}
 */
function Deck({ type, deck, totalCards, interactive }: DeckProps) {

	function isVisible() {
		return (type === 'computer' && computerCardVisible.value === true)
			|| (type === 'human' && humanCardVisible.value === true);
	}

	return (
		<section>
			<Status
				type={type}
				numberOfCards={deck.length}
				totalCards={totalCards}
			/>
			{deck.slice(-1).map((card, index) => {
				return (
					<Card
						key={card.id}
						id={card.id}
						visible={isVisible()}
						name={card.name}
						image={card.image}
						properties={card.properties}
						interactive={interactive && humanCardInteractive.value === true}
						count={index}
					/>
				);
				
			})}
		</section>
	);
}

export default Deck;
