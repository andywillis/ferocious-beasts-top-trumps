import Card from '../../components/Card';
import Grid from '../../components/Grid';

import { CardType } from '../../types';

import { cards } from '../../store';

import { sortCards } from '../../helpers/cards';

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
				{sortCards(cards.value).map((card: CardType, index: number) => {
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
