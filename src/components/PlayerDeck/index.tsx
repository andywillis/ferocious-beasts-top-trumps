import { Notice, Card } from '../index';

import { CardType } from '../../types';

import style from './style.module.css';

interface PlayerDeckProps {
	type: string;
	deck: CardType[];
}

/**
 * PlayerDeck
 *
 * The player (human/computer) deck
 *
 * @param {PlayerDeckProps} { deck }
 * @return {React.Element}
 */
function PlayerDeck({ type, deck }: PlayerDeckProps) {
	return (
		<section className={style.playerDeck}>
			<Notice notice={`${type} has ${deck.values.length} card(s)`} />
			{deck.slice(-1).map((card, index) => {
				return (
					<Card
						key={card.id}
						id={card.id}
						name={card.name}
						image={card.image}
						properties={card.properties}
						interactive={false}
						count={index}
					/>
				);
				
			})}
		</section>
	);
}

export default PlayerDeck;
