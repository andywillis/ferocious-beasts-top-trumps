/* eslint-disable max-len */
import style from './style.module.css';

import Card from '../../components/Card';

import getThreeRandomAnimals from '../../helpers/getThreeRandomAnimals';

/**
 * Home
 *
 * @return {React.Element} Home component/page
 */
function Home() {
	return (
		<main className={style.main}>
			<section className={style.intro}>
				Ferocious Beasts Top Trumps is a fun card game that can be enjoyed by everyone. The object of the game is to collect all of the cards in the deck by having the highest statistics on the card.
			</section>
			<section className={style.cardDisplay}>
				{getThreeRandomAnimals().map((card, index) => {
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
		</main>
	);
}

export default Home;
