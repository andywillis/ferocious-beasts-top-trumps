import Card from '../Card';

import { AnimalType } from '../../types';

import style from './style.module.css';

import { animals } from '../../store';

/**
 * Main
 * @return {React.Element} Main component
 */
function Main() {
	return (
		<main>
			<section className={style.board}>
				{animals.value.map((card: AnimalType) => {
					return (
						<Card
							key={card.id}
							id={card.id}
							name={card.name}
							avatar={card.avatar}
							properties={card.properties}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default Main;
