import Card from '../../components/Card';

import { AnimalType } from '../../types';

import style from './style.module.css';

import { animals } from '../../store';

/**
 * ViewCards
 * @return {React.Element} ViewCards component/page
 */
function ViewCards() {
	return (
		<main className={style.main}>
			{animals.value.map((card: AnimalType) => {
				return (
					<Card
						key={card.id}
						id={card.id}
						name={card.name}
						avatar={card.avatar}
						properties={card.properties}
						interactive
					/>
				);
			})}
		</main>
	);
}

export default ViewCards;
