import { Status, Card } from '../index';

import { CardType } from '../../types';

import style from './style.module.css';

interface DeckProps {
	type: string;
	deck: CardType[];
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
function Deck({ type, deck, interactive }: DeckProps) {
	return (
		<section className={style.deck}>
			<Status status={`${type} has ${deck.length} card(s)`} />
			{deck.slice(-1).map((card, index) => {
				return (
					<Card
						key={card.id}
						id={card.id}
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
