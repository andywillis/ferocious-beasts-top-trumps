import style from './style.module.css';

import { AnimalType, PropertyType } from '../../types';

/**
 * Card
 *
 * @param {CardType} { name, avatar, properties }
 * @return {React.Element} Card component
 */
function Card({ name, avatar, properties }: AnimalType) {
	return (
		<section className={style.card}>
			<header className={style.name}>{name}</header>
			<div className={style.avatar}>{avatar}</div>
			<footer className={style.properties}>
				{properties.map((property: PropertyType) => {
					return (
						<div key={property.id} className={style.property}>
							<span>{property.name}</span>
							<span>{property.value}</span>
						</div>
					);
				})}
			</footer>
		</section>
	);
}

export default Card;
