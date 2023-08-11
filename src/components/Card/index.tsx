import style from './style.module.css';

import { CardType, PropertyType } from '../../types';

/**
 * Card
 *
 * @param {CardType} { name, avatar, properties }
 * @return {React.Element} Card component
 */
function Card({ name, avatar, properties, interactive = false }: CardType) {
	
	const cn = [
		style.card,
		interactive && style.cardinteractive
	].join(' ');
	
	return (
		<section className={cn}>

			<header className={style.name}>
				<h2>{name}</h2>
			</header>

			<img className={style.avatar} src={avatar} alt={name} />

			<ul className={style.properties}>
				{properties.map((property: PropertyType) => {
					
					const cn = [
						style.property,
						interactive && style.propinteractive
					].join(' ');
					
					return (
						<li key={property.id} className={cn}>
							<span>{property.name}</span>
							<span>{property.value}</span>
						</li>
					);

				})}
			</ul>

		</section>
	);

}

export default Card;
