import Card from '../../components/Card';

import { AnimalType } from '../../types';

import sortAnimals from '../../helpers/sortAnimals';

import style from './style.module.css';

/**
 * ViewCards
 * @return {React.Element} ViewCards component/page
 */
function ViewCards() {
	return (
		<main className={style.main}>
			{sortAnimals().map((card: AnimalType, index: number) => {
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
		</main>
	);
}

export default ViewCards;
