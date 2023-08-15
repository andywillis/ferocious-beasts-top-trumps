/* eslint-disable max-len */
import style from './style.module.css';

import Card from '../../components/Card';
import Grid from '../../components/Grid';

import { getThreeRandomCards } from '../../helpers/cards';

/**
 * Home
 *
 * Simple home page describing the game, and showing a random
 * sample of three cards
 *
 * @return {React.Element} Home component/page
 */
function Home() {
	return (
		<main className={style.main}>
			<section className={style.intro}>
				Ferocious Beasts Top Trumps is a fun card game that can be enjoyed by everyone. The object of the game is to collect all of the cards in the deck by having the highest statistics on the card.
			</section>
			<Grid>
				{getThreeRandomCards().map((card, index) => {
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

export default Home;
