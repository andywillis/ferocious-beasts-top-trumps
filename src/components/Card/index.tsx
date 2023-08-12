import { CardType } from '../../types';

import CardImage from './CardImage';
import CardProperties from './CardProperties';

import style from './style.module.css';

/**
 * Card
 *
 * @param {CardType} { name, avatar, properties }
 * @return {React.Element} Card component
 */
function Card(props: CardType) {
	
	const {
		name,
		image,
		properties,
		interactive = false,
		count
	} = props;

	const cn = [
		style.card,
		interactive && style.interactive
	].join(' ');
	
	return (
		<section className={cn}>

			<header className={style.name}>
				<h2>{name}</h2>
			</header>

			<CardImage
				src={`assets/images/${image.name}`}
				alt={image.alt}
				count={count}
			/>

			<CardProperties
				properties={properties}
				interactive={interactive}
			/>

		</section>
	);

}

export default Card;
