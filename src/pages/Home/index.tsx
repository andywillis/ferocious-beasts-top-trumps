/* eslint-disable max-len */
import style from './style.module.css';

import Card from '../../components/Card';
import Grid from '../../components/Grid';

import { cards } from '../../store';

import { getRandomCards } from '../../helpers/cards';

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
				<p>A fun card game for all the family</p>
				<p>Play against a deadly computer opponent and win all the cards</p>
			</section>
			<Grid>
				{getRandomCards(cards.peek(), 3).map((card, index) => {
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
