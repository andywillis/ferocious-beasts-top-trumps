import Card from '../../components/Card';
import Grid from '../../components/Grid';

import { CardType } from '../../types';

import { sortedCards } from '../../store';

/**
 * ViewCards
 *
 * Sorts and shows a grid of all the animal cards
 *
 * @return {React.Element} ViewCards component/page
 */
function ViewCards() {
	return (
		<main>
			<Grid>
				{sortedCards.peek().map((card: CardType, index: number) => {
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
			</Grid>
		</main>
	);
}

export default ViewCards;
