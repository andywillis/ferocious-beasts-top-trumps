import { Status, Card } from '../index';

import { CardType } from '../../types';

import { computerCardVisible } from '../../store';

import style from './style.module.css';

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
			|| type === 'human';
	}
	
	return (
		<section className={style.deck}>
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
						interactive={interactive}
						count={index}
					/>
				);
				
			})}
		</section>
	);
}

export default Deck;
